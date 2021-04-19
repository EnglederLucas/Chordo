"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SongbookValidation = exports.SongbookSchema = void 0;
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