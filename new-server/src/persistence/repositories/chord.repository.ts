import { IChordRepository } from "../../core/contracts";
import { Connection } from "mongoose";

export class ChordRepository implements IChordRepository {
  constructor(private db: Connection) {}
}
