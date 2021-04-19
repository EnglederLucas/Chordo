import { IUnitOfWork } from "../core/contracts";

export class LeadsheetController {
  constructor(private readonly unitOfWork: IUnitOfWork) {}
}
