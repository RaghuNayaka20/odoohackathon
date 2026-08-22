import { Router } from "express";
import { createPayroll, getPayroll, listPayroll } from "../controllers/payroll.controller.js";
import { requireAuth, requireRole } from "../middleware/auth.middleware.js";
const router = Router(); router.use(requireAuth);
router.get("/", listPayroll); router.get("/:id", getPayroll); router.post("/", requireRole("admin", "hr"), createPayroll);
export default router;
