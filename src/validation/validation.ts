import { ZodType } from "zod";

export class Validation {
  static validation<T> (scema: ZodType, data :T) : T {
    return scema.parse(data);
  }
}