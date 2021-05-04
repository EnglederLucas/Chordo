"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const joi_1 = require("joi");
exports.LeadsheetSchema = new mongoose.Schema({
    title: { type: String, required: true, maxlength: 25 },
    artist: { type: String, required: true, maxlength: 50 },
    year: { type: String, required: false, maxlength: 5 },
    defaultKey: { type: String, required: false, maxlength: 5 },
    originalKey: { type: String, required: false, maxlength: 5 },
    additionalInfo: { type: String, required: false, maxlength: 50 },
    tags: [{ type: String }],
    chords: { type: joi_1.any, required: false },
});
const Leadsheet = mongoose.model("Leadsheet", exports.LeadsheetSchema);
exports.default = Leadsheet;
//# sourceMappingURL=leadsheet.js.map