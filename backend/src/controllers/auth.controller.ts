import type { Request, Response } from "express";
import { User } from "../models/User.model.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";
import { success } from "../utils/response.js";

const publicUser = (user: any) => ({ id: user._id, name: user.name, email: user.email, role: user.role, isVerified: user.isVerified });
export async function register(request: Request, response: Response) {
  const { name, email, password, role } = request.body;
  if (await User.exists({ email })) return response.status(409).json({ success: false, message: "Email already registered" });
  const user = await User.create({ name, email, passwordHash: await hashPassword(password), role: role ?? "employee" });
  return success(response, { user: publicUser(user), token: signToken({ userId: user.id, role: user.role }) }, 201);
}
export async function login(request: Request, response: Response) {
  const user = await User.findOne({ email: request.body.email }).select("+passwordHash");
  if (!user || !(await comparePassword(request.body.password, user.passwordHash))) return response.status(401).json({ success: false, message: "Invalid email or password" });
  return success(response, { user: publicUser(user), token: signToken({ userId: user.id, role: user.role }) });
}
export async function me(_request: Request, response: Response) {
  const user = await User.findById(response.locals.auth.userId);
  return success(response, publicUser(user));
}
