import * as mongoose from "mongoose";
import Joi, { any } from "joi";
import uniqueValidator from "mongoose-unique-validator";
import { Tag } from "./tag";
import { Schema } from "mongoose";

export interface ILeadsheet extends mongoose.Document {
  title: string;
  tags?: Tag[];
  year?: string;
  chords?: any;
  artist: string;
  originalKey?: string;
  defaultKey?: string;
  additionalInfo?: string;
}

export const LeadsheetSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 25 },
  artist: { type: String, required: true, maxlength: 50 },
  year: { type: String, required: false, maxlength: 5 },
  defaultKey: { type: String, required: false, maxlength: 5 },
  originalKey: { type: String, required: false, maxlength: 5 },
  additionalInfo: { type: String, required: false, maxlength: 50 },
  tags: [{ type: String }],
  chords: { type: any, required: false },
});

const Leadsheet = mongoose.model<ILeadsheet>("Leadsheet", LeadsheetSchema);
export default Leadsheet;
