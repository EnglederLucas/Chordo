"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = exports.InjectRouter = exports.Middleware = exports.injectRouterKey = void 0;
const reflect_helper_1 = require("./reflect-helper");
exports.injectRouterKey = Symbol('injectRouterKey');
exports.Middleware = (middleware) => {
    return (target, key, descriptor) => {
        reflect_helper_1.addMiddlewareFor(key, target.constructor, middleware);
    };
};
exports.InjectRouter = () => {
    return (target, key) => {
        Reflect.defineMetadata(exports.injectRouterKey, key, target.constructor);
    };
};
exports.Validate = (validation) => {
    return (target, key, descriptor) => {
        const toStore = validation instanceof Array
            ? validation
            : [validation];
        reflect_helper_1.addValidationsFor(key, target.constructor, toStore);
    };
};
//# sourceMappingURL=other.js.map