import { LeadsheetRepository } from "./repositories/leadsheet.repository";
import { SongbookRepository } from "./repositories/songbook.repository";
import {
  IChordRepository,
  IUnitOfWork,
  IUserRepository,
  ISongbookRepository,
  ILeadsheetRepository,
} from "../core/contracts";
import mongoose, { Connection } from "mongoose";
import { ChordRepository } from "./repositories/chord.repository";
import { UserRepository } from "./repositories/user.repository";

export class UnitOfWork implements IUnitOfWork {
  public readonly chords: IChordRepository;
  public readonly users: IUserRepository;
  public readonly songbooks: ISongbookRepository;
  public readonly leadsheets: ILeadsheetRepository;

  constructor(db: Connection) {
    this.chords = new ChordRepository(db);
    this.users = new UserRepository(db);
    this.songbooks = new SongbookRepository(db);
    this.leadsheets = new LeadsheetRepository(db);
  }
}
