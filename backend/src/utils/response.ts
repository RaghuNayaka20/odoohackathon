import type { Response } from "express";

export const success = (response: Response, data: unknown, status = 200) => response.status(status).json({ success: true, data });
export const failure = (response: Response, message: string, status = 400) => response.status(status).json({ success: false, message });
