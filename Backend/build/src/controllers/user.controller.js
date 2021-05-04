"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    constructor(unitOfWork) {
        this.unitOfWork = unitOfWork;
    }
    async getAll() {
        return await this.unitOfWork.users.getAll();
    }
    async getById(id) {
        return await this.unitOfWork.users.getById(id);
    }
    async add(user) {
        return this.unitOfWork.users.add(user);
    }
    async getByEmail(email) {
        return this.unitOfWork.users.getByEmail(email);
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map