import Joi, { Schema, ValidationResult } from "joi";
import $Log from "./logger";

export async function validateAndThrow(
  value: any,
  schema: Schema
): Promise<ValidationResult> {
  const res = schema.validate(value);

  $Log.logger.debug(res);
  if (res.error !== null) {
    throw new Error(res.error?.details[0].message);
  }

  return res;
}
