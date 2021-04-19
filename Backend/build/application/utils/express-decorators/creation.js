"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDocsFor = exports.createEndpoint = void 0;
const express_1 = require("express");
const reflect_helper_1 = require("./decorators/reflect-helper");
const express_validator_1 = require("express-validator");
const models_1 = require("./models");
const routing_1 = require("./decorators/routing");
const other_1 = require("./decorators/other");
exports.createEndpoint = (instance, app) => {
    const router = express_1.Router();
    initRoutes(instance, router);
    addRouterToApplication(app, instance, router);
    injectRouterIfNeccessary(router, instance);
};
const initRoutes = (instance, router) => {
    reflect_helper_1.getRouteMetadata(instance.constructor).forEach(def => {
        let validationChains = reflect_helper_1.getValidationMetadata(instance.constructor, def.methodName);
        let middlewares = reflect_helper_1.getMiddlewareMetadata(instance.constructor, def.methodName);
        router[def.method](def.path, validationChains, middlewares, (req, res) => {
            const error = express_validator_1.validationResult(req);
            if (!error.isEmpty())
                return res.status(400 /* BadRequest */).json({ errors: error.array() });
            Promise.resolve(instance[def.methodName](req, res))
                .then(result => {
                if (result instanceof models_1.JsonResponse) {
                    res.status(result.statusCode).send(result.value);
                }
            })
                .catch(err => {
                res.status(500).send({ msg: `something went wrong!`, err: err.toString() });
            });
        });
    });
};
const addRouterToApplication = (app, instance, router) => {
    const path = Reflect.getMetadata(routing_1.endpointPathKey, instance.constructor);
    app.use(path, router);
};
const injectRouterIfNeccessary = (router, instance) => {
    if (Reflect.hasMetadata(other_1.injectRouterKey, instance.constructor)) {
        const injectRouterProperty = Reflect.getMetadata(other_1.injectRouterKey, instance.constructor);
        instance[injectRouterProperty] = router;
    }
};
exports.createDocsFor = (instance) => {
    let result = ['<article id="endpoint-def">'];
    const endpointPath = Reflect.getMetadata(routing_1.endpointPathKey, instance.constructor);
    result.push(`<h1>${endpointPath}</h1>`);
    reflect_helper_1.getRouteMetadata(instance.constructor).forEach((def) => {
        result.push(`
        <section class="${def.method}">
            <div>
                <h2>${def.method}</h2>
            </div>
            <div>
                <p>${def.path}</p>
            </div>
        </section>
        `);
    });
    result.push('</article>');
    return result.join('\n');
};
//# sourceMappingURL=creation.js.map