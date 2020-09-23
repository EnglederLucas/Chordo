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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const songbook_endpoint_1 = require("./application/endpoints/songbook.endpoint");
const leadsheet_controller_1 = require("./controllers/leadsheet.controller");
const leadsheet_endpoint_1 = require("./application/endpoints/leadsheet.endpoint");
const express = __importStar(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const passportConfig = __importStar(require("./application/middleware/passport"));
const logger_1 = __importDefault(require("./utils/logger"));
const unitofwork_1 = require("./persistence/unitofwork");
const ChordoServer_1 = require("./application/ChordoServer");
const endpoints_1 = require("./application/endpoints");
const controllers_1 = require("./controllers");
const songbook_controller_1 = require("./controllers/songbook.controller");
logger_1.default.logTitle();
logger_1.default.logger.info("Initializing Server ...");
const port = parseInt((_a = process.env["PORT"]) !== null && _a !== void 0 ? _a : "0") || 3030;
const enableCors = true;
// const dataInitializer: IDataInitializer = new InMemoryDataInitializer();
async function init() {
    // console.log(require("crypto").randomBytes(64).toString("hex"));
    var _a;
    await mongoose_1.default.set("useCreateIndex", true);
    await mongoose_1.default.connect((_a = process.env["MONGODB_CONNECTION"]) !== null && _a !== void 0 ? _a : "", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            logger_1.default.logger.error(err);
        }
        else {
            logger_1.default.logger.info("Connected To DB");
        }
    });
    const unitOfWork = new unitofwork_1.UnitOfWork(mongoose_1.default.connection);
    const server = new ChordoServer_1.ChordoServer({
        port: port,
        routables: [
            new endpoints_1.ChordEndpoint(new controllers_1.ChordController(unitOfWork)),
            new endpoints_1.UserEndpoint(new controllers_1.UserController(unitOfWork)),
            new leadsheet_endpoint_1.LeadsheetEndpoint(new leadsheet_controller_1.LeadsheetController(unitOfWork)),
            new songbook_endpoint_1.SongbookEndpoint(new songbook_controller_1.SongbookController(unitOfWork)),
        ],
        enableCors: enableCors,
        //   staticPaths: [{ route: "/img", paths: [`${__dirname}\\..\\public\\img`] }],
        middlewares: [
            {
                route: "/api/leadsheets",
                handler: passportConfig.authenticateJWT,
            },
            {
                route: "/api/songbooks",
                handler: passportConfig.authenticateJWT,
            },
            // { route: '/img', handler: verifyUserToken },
            { route: "/", handler: logger_1.default.getRoutingLogger() },
            { route: "/", handler: express.json() },
        ],
    });
    server.start();
}
if (enableCors)
    logger_1.default.logger.info("cors enabled");
logger_1.default.logger.info(`${__dirname}\\..\\public`);
init();
//# sourceMappingURL=server.js.map