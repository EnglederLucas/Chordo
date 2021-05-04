"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
exports.UserSchema = new mongoose.Schema({
    name: { type: String, required: false, maxlength: 50 },
    email: {
        type: String,
        required: true,
        maxlength: 100,
        index: true,
        unique: true,
    },
    password: { type: String, required: true, min: 6, max: 1024 },
});
exports.UserSchema.plugin(mongoose_unique_validator_1.default);
exports.UserValidation = joi_1.default.object({
    name: joi_1.default.string().min(6).max(50),
    email: joi_1.default.string().min(6).max(100).required().email(),
    password: joi_1.default.string().min(8).max(200).required(),
});
// function auth(req: any, res: any, next: any) {
//   const token = req.header("auth-token");
//   if (!token) return res.status(401).send("Access Denied");
//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET as string);
//     req.user = verified;
//   } catch (err) {
//     res.status(400).send("Invalid Token");
//   }
// }
const User = mongoose.model("User", exports.UserSchema);
exports.default = User;
//# sourceMappingURL=user.js.map