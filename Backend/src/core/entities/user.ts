import * as mongoose from "mongoose";
import Joi from "joi";
import uniqueValidator from "mongoose-unique-validator";

export interface IUser extends mongoose.Document {
  name?: string;
  email: string;
  password: string;
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: false, maxlength: 50 },
  email: {
    type: String,
    required: true,
    maxlength: 100,
    index: true,
    unique: true,
  },
  password: { type: String, required: true, min: 6, max: 1024 },
});
UserSchema.plugin(uniqueValidator);

export const UserValidation = Joi.object({
  name: Joi.string().min(6).max(50),
  email: Joi.string().min(6).max(100).required().email(),
  password: Joi.string().min(8).max(200).required(),
});

// function auth(req: any, res: any, next: any) {
//   const token = req.header("auth-token");

//   if (!token) return res.status(401).send("Access Denied");

//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET as string);
//     req.user = verified;
//   } catch (err) {
//     res.status(400).send("Invalid Token");
//   }
// }

const User = mongoose.model<IUser>("User", UserSchema);
export default User;
