import type { RequestHandler } from "express";
import { verifyToken } from "../utils/jwt.js";

export const requireAuth: RequestHandler = (request, response, next) => {
  const header = request.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    response.status(401).json({ success: false, message: "Authentication required" });
    return;
  }
  try {
    response.locals.auth = verifyToken(header.slice(7));
    next();
  } catch {
    response.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export const requireRole = (...roles: string[]): RequestHandler => (_request, response, next) => {
  if (!roles.includes(response.locals.auth?.role)) {
    response.status(403).json({ success: false, message: "Insufficient permissions" });
    return;
  }
  next();
};
