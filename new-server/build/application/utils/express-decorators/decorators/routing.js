"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delete = exports.Put = exports.Post = exports.Get = exports.Endpoint = exports.endpointPathKey = void 0;
const reflect_helper_1 = require("./reflect-helper");
exports.endpointPathKey = Symbol('endpointPathKey');
exports.Endpoint = (path, prefix = 'api') => {
    return (target) => {
        // if prefix is of type array, join the value, otherwise it should be of type string 
        let finalPrefix = prefix instanceof Array ? prefix.join('/') : prefix;
        Reflect.defineMetadata(exports.endpointPathKey, `/${finalPrefix}/${path}`, target);
    };
};
exports.Get = (path) => {
    return (target, key, descriptor) => {
        reflect_helper_1.addRouteDefinition({
            method: 'get',
            path: path,
            methodName: key
        }, target.constructor);
    };
};
exports.Post = (path) => {
    return (target, key, descriptor) => {
        reflect_helper_1.addRouteDefinition({
            method: 'post',
            path: path,
            methodName: key
        }, target.constructor);
    };
};
exports.Put = (path) => {
    return (target, key, descriptor) => {
        reflect_helper_1.addRouteDefinition({
            method: 'put',
            path: path,
            methodName: key
        }, target.constructor);
    };
};
exports.Delete = (path) => {
    return (target, key, descriptor) => {
        reflect_helper_1.addRouteDefinition({
            method: 'delete',
            path: path,
            methodName: key
        }, target.constructor);
    };
};
//# sourceMappingURL=routing.js.map