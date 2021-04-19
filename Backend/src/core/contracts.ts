import { ILeadsheet } from "./entities/leadsheet";
import { ISongbook } from "./entities/songbook";
import { IUser } from "./entities/user";

export interface IGenericRepository<TEntity, TId> {
  getAll(): Promise<TEntity[]>;
  add(item: TEntity): Promise<TEntity>;
  addRange(items: TEntity[]): Promise<void>;
  getById(id: TId): Promise<TEntity | null>;
}

export interface IMutableRepository<TEntity, TId> {
  update(id: TId, item: TEntity): Promise<TEntity>;
  remove(id: TId): Promise<TEntity>;
}

export interface IChordRepository {}

export interface IUserRepository
  extends IGenericRepository<IUser, string>,
    IMutableRepository<IUser, string> {
  getByEmail(email: string): Promise<IUser | null>;
}

export interface ISongbookRepository
  extends IGenericRepository<ISongbook, string>,
    IMutableRepository<ISongbook, string> {}

export interface ILeadsheetRepository
  extends IGenericRepository<ILeadsheet, string>,
    IMutableRepository<ILeadsheet, string> {}

export interface IUnitOfWork {
  readonly chords: IChordRepository;
  readonly users: IUserRepository;
  readonly songbooks: ISongbookRepository;
  readonly leadsheets: ILeadsheetRepository;
}
