import { IUnitOfWork } from "../core/contracts";
import { UserDto } from "./dtos";
import { IUser } from "../core/entities/user";

export class UserController {
  constructor(private readonly unitOfWork: IUnitOfWork) {}

  async getAll(): Promise<IUser[]> {
    return await this.unitOfWork.users.getAll();
  }

  async getById(id: string): Promise<IUser | null> {
    return await this.unitOfWork.users.getById(id);
  }

  async add(user: IUser): Promise<IUser> {
    return this.unitOfWork.users.add(user);
  }

  async getByEmail(email: string): Promise<IUser | null> {
    return this.unitOfWork.users.getByEmail(email);
  }
}
