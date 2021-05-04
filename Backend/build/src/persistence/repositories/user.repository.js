"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../core/entities/user"));
const logger_1 = __importDefault(require("./../../utils/logger"));
class UserRepository {
    constructor(db) {
        this.db = db;
    }
    getByEmail(email) {
        return user_1.default.findOne({ email: email }).exec();
    }
    getAll() {
        return user_1.default.find({}).exec();
    }
    async add(item) {
        // const res = await this.userCollection.insertOne(item);
        // return { id: res.insertedId, ...item } as IUser;
        try {
            logger_1.default.logger.debug("Saving " + item);
            return await item.save();
        }
        catch (error) {
            logger_1.default.logger.error((error !== null && error !== void 0 ? error : "Can't save user in DB"));
            throw new Error(error);
        }
    }
    addRange(items) {
        throw new Error("Method not implemented.");
    }
    getById(id) {
        logger_1.default.logger.debug(id);
        return user_1.default.findById(id).exec();
    }
    update(id, item) {
        throw new Error("Method not implemented.");
    }
    remove(id) {
        throw new Error("Method not implemented.");
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map