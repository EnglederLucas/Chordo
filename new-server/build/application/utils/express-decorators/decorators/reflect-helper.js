"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMiddlewareFor = exports.getMiddlewareMetadata = exports.addValidationsFor = exports.getValidationMetadata = exports.addRouteDefinition = exports.getRouteMetadata = void 0;
const routeKey = Symbol('routeKey');
const validationsKey = Symbol('validationsKey');
const middlewareKey = Symbol('middlewareKey');
exports.getRouteMetadata = (target) => {
    if (!Reflect.hasMetadata(routeKey, target)) {
        Reflect.defineMetadata(routeKey, [], target);
    }
    return Reflect.getMetadata(routeKey, target);
};
exports.addRouteDefinition = (def, target) => {
    const routes = exports.getRouteMetadata(target);
    routes.push(def);
    // routes is a refernece on a RouteDefinition array, so all changes will also affect the are stored in the metadata
    // of the target. So we don't need the line below
    // Reflect.defineMetadata(routeKey, routes, target);
};
exports.getValidationMetadata = (target, methodName) => {
    if (!Reflect.hasMetadata(validationsKey, target, methodName)) {
        Reflect.defineMetadata(validationsKey, [], target, methodName);
    }
    return Reflect.getMetadata(validationsKey, target, methodName);
};
exports.addValidationsFor = (methodName, target, validations) => {
    const metaValidations = exports.getValidationMetadata(target, methodName);
    validations.forEach(validation => metaValidations.push(validation));
};
exports.getMiddlewareMetadata = (target, methodName) => {
    if (!Reflect.hasMetadata(middlewareKey, target, methodName)) {
        Reflect.defineMetadata(middlewareKey, [], target, methodName);
    }
    return Reflect.getMetadata(middlewareKey, target, methodName);
};
exports.addMiddlewareFor = (methodName, target, middleware) => {
    const middlewares = exports.getMiddlewareMetadata(target, methodName);
    middlewares.push(middleware);
};
//# sourceMappingURL=reflect-helper.js.map