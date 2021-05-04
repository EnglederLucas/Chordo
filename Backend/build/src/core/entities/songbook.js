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
const mongoose_1 = require("mongoose");
exports.SongbookSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 25 },
    imgUrl: {
        type: String,
        required: false,
        maxlength: 200,
    },
    leadSheets: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            required: true,
        },
    ],
    tags: [{ type: String, required: false }],
});
exports.SongbookValidation = joi_1.default.object({
    title: joi_1.default.string().min(6).max(25),
});
const Songbook = mongoose.model("Songbook", exports.SongbookSchema);
exports.default = Songbook;
//# sourceMappingURL=songbook.js.map