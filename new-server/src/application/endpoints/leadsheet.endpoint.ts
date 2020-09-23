import { LeadsheetController } from "./../../controllers/leadsheet.controller";
import { SongbookController } from "./../../controllers/songbook.controller";
import { ChordController } from "../../controllers";
import { Endpoint } from "../utils/express-decorators/decorators";

@Endpoint("leadsheets")
export class LeadsheetEndpoint {
  constructor(private leadsheetController: LeadsheetController) {}
}
