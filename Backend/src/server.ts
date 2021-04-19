import "reflect-metadata";
import { SongbookEndpoint } from "./application/endpoints/songbook.endpoint";
import { LeadsheetController } from "./controllers/leadsheet.controller";
import { LeadsheetEndpoint } from "./application/endpoints/leadsheet.endpoint";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import mongoose from "mongoose";
import passport from "passport";

import dotenv from "dotenv";
dotenv.config();
import * as passportConfig from "./application/middleware/passport";

import $Log from "./utils/logger";

import { $log } from "@tsed/logger";
import { UnitOfWork } from "./persistence/unitofwork";
import { ChordoServer } from "./application/ChordoServer";
import { ChordEndpoint, UserEndpoint } from "./application/endpoints";
import { UserController, ChordController } from "./controllers";
import Log from "./utils/logger";

import User from "./core/entities/user";
import { SongbookController } from "./controllers/songbook.controller";

$Log.logTitle();
$Log.logger.info("Initializing Server ...");

const port: number = parseInt(process.env["PORT"] ?? "0") || 3030;
const enableCors: boolean = true;
// const dataInitializer: IDataInitializer = new InMemoryDataInitializer();

async function init() {
  // console.log(require("crypto").randomBytes(64).toString("hex"));

  await mongoose.set("useCreateIndex", true);

  await mongoose.connect(
    process.env["MONGODB_CONNECTION"] ?? "",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        $Log.logger.error(err);
      } else {
        $Log.logger.info("Connected To DB");
      }
    }
  );

  const unitOfWork: UnitOfWork = new UnitOfWork(mongoose.connection);

  const server: ChordoServer = new ChordoServer({
    port: port,
    routables: [
      new ChordEndpoint(new ChordController(unitOfWork)),
      new UserEndpoint(new UserController(unitOfWork)),
      new LeadsheetEndpoint(new LeadsheetController(unitOfWork)),
      new SongbookEndpoint(new SongbookController(unitOfWork)),
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
      { route: "/", handler: $Log.getRoutingLogger() },
      { route: "/", handler: express.json() },
    ],
    //   keyPath: `${__dirname}\\..\\public\\security\\key.pem`,
    //   certPath: `${__dirname}\\..\\public\\security\\cert.pem`,
  });

  server.start();
}

if (enableCors) $Log.logger.info("cors enabled");

$Log.logger.info(`${__dirname}\\..\\public`);

init();
