"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scraperUG = require("./../../scraper/ultimate-guitar-scraper/lib/index");
class ChordController {
    constructor(unitOfWork) {
        this.unitOfWork = unitOfWork;
    }
    async ImportFromUG(url) {
        return scraperUG.get(url, (error, chords) => {
            if (error) {
                console.log(error);
                return;
            }
            const cChords = chords;
            //const text = processText(cChords, { transposed: false });
            const options = {};
            return chords;
            console.log("Result");
        });
    }
}
exports.ChordController = ChordController;
//# sourceMappingURL=chord.controller.js.map