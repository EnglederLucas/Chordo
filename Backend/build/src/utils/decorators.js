"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
function Deprecated(alternate = "") {
    return (target) => {
        logger_1.default.logger.warn(`${target.name} is deprecated and will be removed in future versions of the app.`);
        if (alternate !== "") {
            logger_1.default.logger.warn(`Use ${alternate} instead`);
        }
    };
}
exports.Deprecated = Deprecated;
function Sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
exports.Sealed = Sealed;
//# sourceMappingURL=decorators.js.map