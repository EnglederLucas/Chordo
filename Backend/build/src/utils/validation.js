"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
async function validateAndThrow(value, schema) {
    var _a;
    const res = schema.validate(value);
    logger_1.default.logger.debug(res);
    if (res.error !== null) {
        throw new Error((_a = res.error) === null || _a === void 0 ? void 0 : _a.details[0].message);
    }
    return res;
}
exports.validateAndThrow = validateAndThrow;
//# sourceMappingURL=validation.js.map