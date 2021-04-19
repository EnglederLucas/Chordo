import { ChordController } from "./../../controllers/chord.controller";
import { Request, Response } from "express";

import { Endpoint, Post, Get } from "../utils/express-decorators/decorators";
import { Ok, Failed } from "../utils/express-decorators/models";
import Log from "../../utils/logger";

@Endpoint("chords")
export class ChordEndpoint {
  constructor(private chordController: ChordController) {}

  @Post("/ug")
  async getPaged(req: Request) {
    // $Log.logger.debug("Request", req);
    const ugUrl = req.body.url;

    try {
      return Ok(await this.chordController.ImportFromUG(ugUrl));
    } catch (ex) {
      return Failed(ex);
    }
  }

  @Get("/dude")
  async Dude(req: Request) {
    return Ok("Dude");
  }
}
