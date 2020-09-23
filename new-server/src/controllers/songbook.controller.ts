import { IUnitOfWork } from "../core/contracts";

export class SongbookController {
  constructor(private readonly unitOfWork: IUnitOfWork) {}
}
