"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importStar(require("./../../core/entities/user"));
const logger_1 = __importDefault(require("../../utils/logger"));
const decorators_1 = require("../utils/express-decorators/decorators");
const models_1 = require("../utils/express-decorators/models");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let UserEndpoint = class UserEndpoint {
    constructor(userController) {
        this.userController = userController;
    }
    async getAll(req, res) {
        logger_1.default.logger.info("Je");
        try {
            return models_1.Ok(await this.userController.getAll());
        }
        catch (ex) {
            logger_1.default.logger.error(ex);
            return models_1.BadRequest({ error: ex.toString() });
        }
    }
    async byId(req, res) {
        const id = req.params["id"];
        try {
            // return Ok(await this.userController.getById(id));
        }
        catch (err) {
            return models_1.BadRequest({ error: err.toString() });
        }
    }
    async loginUser(req, res) {
        logger_1.default.logger.info("Login");
        logger_1.default.logger.debug(req.body.name);
        //GENERAL VALIDATION
        const val = user_1.UserValidation.validate(req.body);
        if (val.error) {
            return models_1.BadRequest({ error: val.error.details[0].message });
        }
        try {
            const retrievedUser = await this.userController.getByEmail(req.body.email);
            if (retrievedUser === null) {
                return models_1.BadRequest({
                    error: "Email or password is wrong",
                });
            }
            const validPass = await bcrypt_1.default.compare(req.body.password, retrievedUser.password);
            if (!validPass) {
                return models_1.BadRequest({
                    error: "Email or password is wrong",
                });
            }
            //Create and assign a token
            const token = jsonwebtoken_1.default.sign({
                id: retrievedUser._id,
                name: retrievedUser.name,
                email: retrievedUser.email,
            }, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
            res.header("auth-token", "Bearer " + token);
            return models_1.Ok(token);
        }
        catch (error) {
            logger_1.default.logger.debug(error);
            return models_1.BadRequest({ error: "" + error });
        }
    }
    async registerUser(req, res) {
        logger_1.default.logger.info("Register");
        logger_1.default.logger.debug(req.body.name);
        //GENERAL VALIDATION
        const val = user_1.UserValidation.validate(req.body);
        if (val.error) {
            return models_1.BadRequest({ error: val.error.details[0].message });
        }
        try {
            //PASSWORD HASHING
            const salt = await bcrypt_1.default.genSalt(10);
            const hashPassword = await bcrypt_1.default.hash(req.body.password, salt);
            const newUser = new user_1.default({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword,
            });
            const res = await this.userController.add(newUser);
            return models_1.Ok({
                id: res._id,
                name: res.name,
                email: res.name,
            });
        }
        catch (error) {
            logger_1.default.logger.debug(error);
            return models_1.BadRequest({ error: "" + error });
        }
    }
};
__decorate([
    decorators_1.Get("/")
], UserEndpoint.prototype, "getAll", null);
__decorate([
    decorators_1.Get("/:id")
], UserEndpoint.prototype, "byId", null);
__decorate([
    decorators_1.Post("/login")
], UserEndpoint.prototype, "loginUser", null);
__decorate([
    decorators_1.Post("/register")
], UserEndpoint.prototype, "registerUser", null);
UserEndpoint = __decorate([
    decorators_1.Endpoint("users")
], UserEndpoint);
exports.UserEndpoint = UserEndpoint;
//# sourceMappingURL=user.endpoint.js.map