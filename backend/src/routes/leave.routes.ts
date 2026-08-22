import { Router } from "express";
import { createLeave, listLeaves, reviewLeave } from "../controllers/leave.controller.js";
import { requireAuth, requireRole } from "../middleware/auth.middleware.js";
const router = Router(); router.use(requireAuth);
router.get("/", listLeaves); router.post("/", createLeave); router.patch("/:id/review", requireRole("admin", "hr"), reviewLeave);
export default router;
