import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export type AuthPayload = { userId: string; role: string };

export const signToken = (payload: AuthPayload) => jwt.sign(payload, env.jwtSecret, { expiresIn: env.jwtExpiresIn as jwt.SignOptions["expiresIn"] });
export const verifyToken = (token: string) => jwt.verify(token, env.jwtSecret) as AuthPayload;
