"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
class Tag {
    constructor(text) {
        this.text = text;
        this.usages = 1;
    }
    addUsage() {
        this.usages += 1;
    }
}
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map