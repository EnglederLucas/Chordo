"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChordoServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const logger_1 = __importDefault(require("../utils/logger"));
const creation_1 = require("./utils/express-decorators/creation");
const base_endpoint_1 = require("./endpoints/base.endpoint");
const passport_1 = __importDefault(require("passport"));
class ChordoServer {
    constructor(settings) {
        this.settings = settings;
        this.app = express_1.default();
        // if (settings.keyPath !== undefined && settings.certPath !== undefined) {
        //   const key: Buffer = fs.readFileSync(settings.keyPath as string);
        //   const cert: Buffer = fs.readFileSync(settings.certPath as string);
        //   this.httpsServer = https.createServer({ key, cert }, this.app);
        // }
        this.app.use(express_1.default.json());
        //Passport
        this.app.use(passport_1.default.initialize());
        if (settings.enableCors) {
            let corsOptions = {
                origin: "*",
                optionsSuccessStatus: 200,
            };
            this.app.use(cors_1.default(corsOptions));
        }
        if (settings.middlewares !== undefined) {
            this.addMiddlewares(settings.middlewares);
        }
        if (settings.routables !== undefined)
            this.initRoutes(settings.routables);
        if (settings.staticPaths !== undefined) {
            this.provideStatics(settings.staticPaths);
        }
    }
    initRoutes(routables) {
        this.app.get("/test", passport_1.default.authenticate("jwt", { session: false }), (req, res) => {
            res.send("Hie");
        });
        routables.forEach((r) => {
            if (r instanceof base_endpoint_1.BaseEndpoint) {
                this.app.use(`/api/${r.getBasePath()}`, r.getRouter());
            }
            else {
                creation_1.createEndpoint(r, this.app);
                // $Log.logger.debug(`\n${createDocsFor(r)}\n`);
            }
        });
    }
    provideStatics(staticPaths) {
        staticPaths.forEach((definition) => {
            definition.paths.forEach((path) => {
                this.app.use(definition.route, express_1.default.static(path));
            });
        });
    }
    addMiddlewares(middlewares) {
        middlewares.forEach((m) => this.app.use(m.route, m.handler));
    }
    start() {
        if (this.httpsServer !== undefined) {
            this.httpsServer.listen(this.settings.port, () => {
                logger_1.default.logger.info(`server started at port ${this.settings.port}`);
            });
        }
        else {
            this.app.listen(this.settings.port, () => {
                logger_1.default.logger.info(`server started at port ${this.settings.port}`);
            });
        }
    }
}
exports.ChordoServer = ChordoServer;
//# sourceMappingURL=ChordoServer.js.map