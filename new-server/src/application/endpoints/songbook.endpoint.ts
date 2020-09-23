import { SongbookController } from "./../../controllers/songbook.controller";
import { ChordController } from "../../controllers";
import { Endpoint } from "../utils/express-decorators/decorators";

@Endpoint("songbooks")
export class SongbookEndpoint {
  constructor(private songbookController: SongbookController) {}
}
