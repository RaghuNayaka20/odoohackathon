import multer from "multer";
import path from "node:path";
import { mkdirSync } from "node:fs";
import { env } from "../config/env.js";

mkdirSync(env.uploadDir, { recursive: true });
const storage = multer.diskStorage({
  destination: env.uploadDir,
  filename: (_request, file, callback) => callback(null, `${Date.now()}-${file.originalname.replace(/[^a-zA-Z0-9._-]/g, "-")}`)
});
export const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });
export const uploadPath = (filename: string) => path.join(env.uploadDir, filename);
