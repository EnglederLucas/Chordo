import { ILeadsheetRepository } from "./../../core/contracts";
import { IChordRepository } from "../../core/contracts";
import { Connection } from "mongoose";
import { ILeadsheet } from "../../core/entities/leadsheet";

export class LeadsheetRepository implements ILeadsheetRepository {
  constructor(private db: Connection) {}
  getAll(): Promise<ILeadsheet[]> {
    throw new Error("Method not implemented.");
  }
  add(item: ILeadsheet): Promise<ILeadsheet> {
    throw new Error("Method not implemented.");
  }
  addRange(items: ILeadsheet[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getById(id: string): Promise<ILeadsheet | null> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: ILeadsheet): Promise<ILeadsheet> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<ILeadsheet> {
    throw new Error("Method not implemented.");
  }
}
