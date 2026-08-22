import type { ErrorRequestHandler } from "express";

export const errorMiddleware: ErrorRequestHandler = (error, _request, response, _next) => {
  console.error(error);
  const status = error.statusCode ?? 500;
  response.status(status).json({ success: false, message: status === 500 ? "Internal server error" : error.message });
};
