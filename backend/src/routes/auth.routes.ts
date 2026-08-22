import { Router } from "express";
import { z } from "zod";
import { login, me, register } from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validation.middleware.js";

const router = Router();
const credentials = z.object({ body: z.object({ name: z.string().min(2).optional(), email: z.email(), password: z.string().min(8), role: z.enum(["admin", "hr", "employee"]).optional() }), params: z.record(z.string(), z.unknown()), query: z.record(z.string(), z.unknown()) });
router.post("/register", validate(credentials), register);
router.post("/login", validate(credentials), login);
router.get("/me", requireAuth, me);
export default router;
