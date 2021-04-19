"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./utils/logger"));
const unitofwork_1 = require("./persistence/unitofwork");
const ChordoServer_1 = require("./application/ChordoServer");
const endpoints_1 = require("./application/endpoints");
const controllers_1 = require("./controllers");
// class ChordoServer {
//     constructor() {}
//     init() {
//         const app = express();
//         app.use(bodyParser.json());
//         app.use(cors());
//         //app.use(session({secret: "Shh, its a secret!"}));
//         const chords = require('./routes/api/chordRequests.js');
//         app.use('/api/', chords);
//         const port = process.env.port || 5000;
//         console.log("yo");
//         app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
//     }
// }
// const app = express();
//         app.use(bodyParser.json());
//         app.use(cors());
//         //app.use(session({secret: "Shh, its a secret!"}));
//         const chords = require('./routes/api/chordRequests.js');
//         app.use('/api/', chords);
//         const port = process.env.port || 5000;
//         console.log("yo");
//         app.listen(port, () => console.log(`Server started on http://localhost:${port}`));
// const server = new ChordoServer();
// server.init();
logger_1.default.logTitle();
logger_1.default.logger.info("start initializing server ...");
const port = 3030;
const enableCors = true;
// const dataInitializer: IDataInitializer = new InMemoryDataInitializer();
var serviceAccount = require(__dirname +
    "/../vyzerdb-736d7-firebase-adminsdk-vqpte-d08dfa582b.json");
const db = null;
const unitOfWork = new unitofwork_1.UnitOfWork(db);
const server = new ChordoServer_1.GuideoServer({
    port: port,
    routables: [
        new endpoints_1.ChordEndpoint(new controllers_1.ChordController(unitOfWork)),
        new endpoints_1.UserEndpoint(new controllers_1.UserController(unitOfWork)),
    ],
    enableCors: enableCors,
});
if (enableCors)
    logger_1.default.logger.info("cors enabled");
logger_1.default.logger.info(`${__dirname}\\..\\public`);
server.start();
//# sourceMappingURL=app.js.map