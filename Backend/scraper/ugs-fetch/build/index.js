"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const getChords = async () => axios_1.default.get("https://tabs.ultimate-guitar.com/tab/phoebe-bridgers/i-know-the-end-chords-3100499");
getChords().then((c) => console.log(c));
//# sourceMappingURL=index.js.map