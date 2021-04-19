import { Connection, Collection } from "mongoose";
import { IUserRepository } from "../../core/contracts";
import User, { IUser, UserValidation } from "../../core/entities/user";
import $Log from "./../../utils/logger";
import Joi from "joi";
import { validateAndThrow } from "../../utils/validation";

export class UserRepository implements IUserRepository {
  constructor(private db: Connection) {}
  getByEmail(email: string): Promise<IUser | null> {
    return User.findOne({ email: email }).exec();
  }

  getAll(): Promise<IUser[]> {
    return User.find({}).exec();
  }
  async add(item: IUser): Promise<IUser> {
    // const res = await this.userCollection.insertOne(item);
    // return { id: res.insertedId, ...item } as IUser;

    try {
      $Log.logger.debug("Saving " + item);
      return await item.save();
    } catch (error) {
      $Log.logger.error(error ?? "Can't save user in DB");
      throw new Error(error);
    }
  }
  addRange(items: IUser[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getById(id: string): Promise<IUser | null> {
    $Log.logger.debug(id);
    return User.findById(id).exec();
  }
  update(id: string, item: IUser): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  remove(id: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
}
