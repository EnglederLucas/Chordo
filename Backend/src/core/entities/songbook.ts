import * as mongoose from "mongoose";
import Joi from "joi";
import uniqueValidator from "mongoose-unique-validator";
import { ILeadsheet } from "./leadsheet";
import { Schema } from "mongoose";
import { Tag } from "./tag";

export interface ISongbook extends mongoose.Document {
  title: string;
  imgUrl?: string;
  tags?: Tag[];
  leadSheets: string[] | ILeadsheet[];
}

export const SongbookSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 25 },
  imgUrl: {
    type: String,
    required: false,
    maxlength: 200,
  },
  leadSheets: [
    {
      type: Schema.Types.ObjectId,
      required: true,
    },
  ],
  tags: [{ type: String, required: false }], //TODO: Use Tags Type for Usages and maybe ? faster performance
});

export const SongbookValidation = Joi.object({
  title: Joi.string().min(6).max(25),
});

const Songbook = mongoose.model<ISongbook>("Songbook", SongbookSchema);
export default Songbook;
