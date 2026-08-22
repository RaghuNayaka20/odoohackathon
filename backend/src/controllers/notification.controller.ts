import type { Request, Response } from "express";
import { Notification } from "../models/Notification.model.js";
import { success } from "../utils/response.js";

export async function listNotifications(_request: Request, response: Response) { return success(response, await Notification.find({ userId: response.locals.auth.userId }).sort({ createdAt: -1 })); }
export async function markRead(request: Request, response: Response) { return success(response, await Notification.findOneAndUpdate({ _id: request.params.id, userId: response.locals.auth.userId }, { read: true }, { new: true })); }
