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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadsheetSchema = void 0;
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