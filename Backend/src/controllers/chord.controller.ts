import { IUnitOfWork } from "../core/contracts";
const scraperUG = require("./../../scraper/ultimate-guitar-scraper/lib/index");

export class ChordController {
  constructor(private readonly unitOfWork: IUnitOfWork) {}

  async ImportFromUG(url: string): Promise<any> {
    return scraperUG.get(url, (error: any, chords: any) => {
      if (error) {
        console.log(error);
        return;
      }

      const cChords = chords;
      //const text = processText(cChords, { transposed: false });
      const options = {};

      return chords;

      console.log("Result");
    });
  }
}
