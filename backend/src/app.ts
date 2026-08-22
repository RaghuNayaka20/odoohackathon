import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { z } from "zod";

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL ?? "http://localhost:3000" }));
app.use(express.json());
app.use(morgan("dev"));

const credentials = z.object({ email: z.string().email(), password: z.string().min(8) });
app.get("/api/health", (_req, res) => res.json({ success: true, message: "Dayflow API is healthy", data: { service: "backend" } }));
app.post("/api/auth/signin", (req, res) => {
  const result = credentials.safeParse(req.body);
  if (!result.success) return res.status(400).json({ success: false, message: "Enter a valid email and password" });
  return res.json({ success: true, message: "Signed in successfully", data: { user: { name: "Alex Rivera", role: "ADMIN", email: result.data.email }, token: "demo-token" } });
});
app.get("/api/dashboard", (_req, res) => res.json({ success: true, data: { presentToday: 0.948, workforceHealth: 92.4, pendingApprovals: 3 } }));
app.use((_req, res) => res.status(404).json({ success: false, message: "Route not found" }));
app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => res.status(500).json({ success: false, message: error.message || "Unexpected server error" }));
export default app;
