import type { Request, Response } from "express";
import { Document } from "../models/Document.model.js";
import { success } from "../utils/response.js";

export async function listDocuments(request: Request, response: Response) { return success(response, await Document.find({ employeeId: request.params.employeeId }).sort({ createdAt: -1 })); }
export async function uploadDocument(request: Request, response: Response) { const file = request.file; if (!file) return response.status(400).json({ success: false, message: "A file is required" }); return success(response, await Document.create({ employeeId: request.params.employeeId, name: request.body.name ?? file.originalname, filename: file.filename, path: file.path, mimeType: file.mimetype, size: file.size }), 201); }
