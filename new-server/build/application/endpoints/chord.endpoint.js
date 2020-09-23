"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordEndpoint = void 0;
const decorators_1 = require("../utils/express-decorators/decorators");
const models_1 = require("../utils/express-decorators/models");
let ChordEndpoint = class ChordEndpoint {
    constructor(chordController) {
        this.chordController = chordController;
    }
    async getPaged(req) {
        // $Log.logger.debug("Request", req);
        const ugUrl = req.body.url;
        try {
            return models_1.Ok(await this.chordController.ImportFromUG(ugUrl));
        }
        catch (ex) {
            return models_1.Failed(ex);
        }
    }
    async Dude(req) {
        return models_1.Ok("Dude");
    }
};
__decorate([
    decorators_1.Post("/ug")
], ChordEndpoint.prototype, "getPaged", null);
__decorate([
    decorators_1.Get("/dude")
], ChordEndpoint.prototype, "Dude", null);
ChordEndpoint = __decorate([
    decorators_1.Endpoint("chords")
], ChordEndpoint);
exports.ChordEndpoint = ChordEndpoint;
//# sourceMappingURL=chord.endpoint.js.map