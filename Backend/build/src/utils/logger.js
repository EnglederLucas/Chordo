"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@tsed/logger");
class Log {
    static getRoutingLogger() {
        //return morgan(`${chalk.blue('<< Server-Routing >>')} [:method] :url [:status] [:response-time ms] - :res[content-length]`);
        return (req, res, next) => {
            this.logger.info(`${req.method} Call on ${req.url}`);
            next();
        };
    }
    // static log(text: string): void {
    //     console.log(`${chalk.blue('<< Server >>')} `, text);
    // }
    static get logger() {
        if (!this.inititalized) {
            this.initLogger();
            this.inititalized = true;
        }
        return this._logger;
    }
    static initLogger() {
        this._logger.appenders
            .set("std-log", {
            type: "stdout",
            layout: { type: "colored" },
            levels: ["debug", "trace", "info"],
        })
            .set("error-log", {
            type: "stderr",
            layout: { type: "colored" },
            levels: ["fatal", "error", "warn"],
        });
    }
    static logTitle() {
        // from: http://patorjk.com/software/taag/#p=display&f=Big&t=Vyzer
        const n = Math.round(Math.random() * 3);
    }
}
exports.default = Log;
Log._logger = new logger_1.Logger("App");
Log.inititalized = false;
//# sourceMappingURL=logger.js.map