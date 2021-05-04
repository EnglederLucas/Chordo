"use strict";
// import { JwtTokenPayload } from "./../../utils/util.entities";
// import User, {
//   IUser,
//   UserValidation,
//   UserSchema,
// } from "./../../core/entities/user";
// import $Log from "../../utils/logger";
// import { query } from "express-validator";
// import { Request, Response } from "express";
// import mongoose from "mongoose";
// import {
//   Endpoint,
//   Get,
//   Validate,
//   Post,
// } from "../utils/express-decorators/decorators";
// import { BadRequest, Ok, Created } from "../utils/express-decorators/models";
// import { UserController } from "../../controllers/user.controller";
// import { validateAndThrow } from "../../utils/validation";
// import bcrypt from "bcrypt";
// import jwt, { Secret } from "jsonwebtoken";
// @Endpoint("login")
// export class LoginEndpoint {
//   constructor(private userController: UserController) {}
//   @Post("/login")
//   async loginUser(req: Request, res: Response) {
//     $Log.logger.info("Login");
//     $Log.logger.debug(req.body.name);
//     //GENERAL VALIDATION
//     const val = UserValidation.validate(req.body);
//     if (val.error) {
//       return BadRequest({ error: val.error.details[0].message });
//     }
//     try {
//       const retrievedUser = await this.userController.getByEmail(
//         req.body.email
//       );
//       if (retrievedUser === null) {
//         return BadRequest({
//           error: "Email or password is wrong",
//         });
//       }
//       const validPass = await bcrypt.compare(
//         req.body.password,
//         retrievedUser.password
//       );
//       if (!validPass) {
//         return BadRequest({
//           error: "Email or password is wrong",
//         });
//       }
//       //Create and assign a token
//       const token = jwt.sign(
//         {
//           id: retrievedUser._id,
//           name: retrievedUser.name,
//           email: retrievedUser.email,
//         } as JwtTokenPayload,
//         process.env.TOKEN_SECRET as string,
//         { expiresIn: "1800s" }
//       );
//       res.header("auth-token", "Bearer " + token);
//       return Ok(token);
//     } catch (error) {
//       $Log.logger.debug(error);
//       return BadRequest({ error: "" + error });
//     }
//   }
//   @Post("/register")
//   async registerUser(req: Request, res: Response) {
//     $Log.logger.info("Register");
//     $Log.logger.debug(req.body.name);
//     //GENERAL VALIDATION
//     const val = UserValidation.validate(req.body);
//     if (val.error) {
//       return BadRequest({ error: val.error.details[0].message });
//     }
//     try {
//       //PASSWORD HASHING
//       const salt = await bcrypt.genSalt(10);
//       const hashPassword = await bcrypt.hash(req.body.password, salt);
//       const newUser = new User({
//         name: req.body.name,
//         email: req.body.email,
//         password: hashPassword,
//       });
//       const res = await this.userController.add(newUser);
//       return Ok({
//         id: res._id,
//         name: res.name,
//         email: res.name,
//       });
//     } catch (error) {
//       $Log.logger.debug(error);
//       return BadRequest({ error: "" + error });
//     }
//   }
// }
//# sourceMappingURL=login.endpoint.js.map