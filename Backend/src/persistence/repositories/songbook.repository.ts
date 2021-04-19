import { ISongbookRepository } from "./../../core/contracts";
import { IChordRepository } from "../../core/contracts";
import { Connection } from "mongoose";
import { ISongbook } from "../../core/entities/songbook";

export class SongbookRepository implements ISongbookRepository {
  constructor(private db: Connection) {}
  getAll(): Promise<ISongbook[]> {
    throw new Error("Method not implemented.");
  }
  add(item: ISongbook): Promise<ISongbook> {
    throw new Error("Method not implemented.");
  }
  addRange(items: ISongbook[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getById(id: string): Promise<ISongbook | null> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: ISongbook): Promise<ISongbook> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<ISongbook> {
    throw new Error("Method not implemented.");
  }
}
