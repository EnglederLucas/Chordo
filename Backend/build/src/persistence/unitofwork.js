"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leadsheet_repository_1 = require("./repositories/leadsheet.repository");
const songbook_repository_1 = require("./repositories/songbook.repository");
const chord_repository_1 = require("./repositories/chord.repository");
const user_repository_1 = require("./repositories/user.repository");
class UnitOfWork {
    constructor(db) {
        this.chords = new chord_repository_1.ChordRepository(db);
        this.users = new user_repository_1.UserRepository(db);
        this.songbooks = new songbook_repository_1.SongbookRepository(db);
        this.leadsheets = new leadsheet_repository_1.LeadsheetRepository(db);
    }
}
exports.UnitOfWork = UnitOfWork;
//# sourceMappingURL=unitofwork.js.map