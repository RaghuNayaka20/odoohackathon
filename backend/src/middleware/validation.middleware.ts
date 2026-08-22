import type { RequestHandler } from "express";
import { z } from "zod";

export const validate = (schema: z.ZodType): RequestHandler => (request, response, next) => {
  const result = schema.safeParse({ body: request.body, params: request.params, query: request.query });
  if (!result.success) {
    response.status(422).json({ success: false, message: "Validation failed", errors: result.error.issues });
    return;
  }
  request.body = (result.data as { body: unknown }).body;
  next();
};
