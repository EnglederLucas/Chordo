"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseEndpoint {
    constructor(basePath) {
        this.basePath = basePath;
        this.router = express_1.Router();
        this.initialized = false;
    }
    getRouter() {
        if (!this.initialized)
            this.init();
        return this.router;
    }
    getBasePath() {
        return this.basePath;
    }
    init() {
        if (this.initialized)
            return;
        this.initRoutes();
        this.initialized = true;
    }
}
exports.BaseEndpoint = BaseEndpoint;
//# sourceMappingURL=base.endpoint.js.map