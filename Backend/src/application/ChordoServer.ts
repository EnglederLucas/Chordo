import express, { Application, Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { Middleware } from "./middleware";
import $Log from "../utils/logger";
import * as https from "https";
import * as fs from "fs";
import * as passportConfig from "./middleware/passport";
import {
  createEndpoint,
  createDocsFor,
} from "./utils/express-decorators/creation";
import { BaseEndpoint } from "./endpoints/base.endpoint";
import passport from "passport";

export interface IStaticPathDefinition {
  route: string;
  paths: string[];
}

export interface IServerOptions {
  port: number;
  routables?: any[];
  enableCors: boolean;
  staticPaths?: IStaticPathDefinition[];
  middlewares?: Middleware[];
  // keyPath?: String;
  // certPath?: String;
}

export class ChordoServer {
  private app: Application;
  private httpsServer: https.Server | undefined;

  constructor(private settings: IServerOptions) {
    this.app = express();

    // if (settings.keyPath !== undefined && settings.certPath !== undefined) {
    //   const key: Buffer = fs.readFileSync(settings.keyPath as string);
    //   const cert: Buffer = fs.readFileSync(settings.certPath as string);

    //   this.httpsServer = https.createServer({ key, cert }, this.app);
    // }

    this.app.use(express.json());

    //Passport
    this.app.use(passport.initialize());

    if (settings.enableCors) {
      let corsOptions: CorsOptions = {
        origin: "*",
        optionsSuccessStatus: 200,
      };

      this.app.use(cors(corsOptions));
    }

    if (settings.middlewares !== undefined) {
      this.addMiddlewares(settings.middlewares);
    }

    if (settings.routables !== undefined) this.initRoutes(settings.routables);

    if (settings.staticPaths !== undefined) {
      this.provideStatics(settings.staticPaths);
    }
  }

  private initRoutes(routables: any[]): void {
    this.app.get(
      "/test",
      passport.authenticate("jwt", { session: false }),
      (req: any, res: any) => {
        res.send("Hie");
      }
    );

    routables.forEach((r) => {
      if (r instanceof BaseEndpoint) {
        this.app.use(`/api/${r.getBasePath()}`, r.getRouter());
      } else {
        createEndpoint(r, this.app);
        // $Log.logger.debug(`\n${createDocsFor(r)}\n`);
      }
    });
  }

  private provideStatics(staticPaths: IStaticPathDefinition[]): void {
    staticPaths.forEach((definition) => {
      definition.paths.forEach((path) => {
        this.app.use(definition.route, express.static(path));
      });
    });
  }

  private addMiddlewares(middlewares: Middleware[]): void {
    middlewares.forEach((m) => this.app.use(m.route, m.handler));
  }

  public start(): void {
    if (this.httpsServer !== undefined) {
      this.httpsServer.listen(this.settings.port, () => {
        $Log.logger.info(`server started at port ${this.settings.port}`);
      });
    } else {
      this.app.listen(this.settings.port, () => {
        $Log.logger.info(`server started at port ${this.settings.port}`);
      });
    }
  }
}
