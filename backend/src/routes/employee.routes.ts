import { Router } from "express";
import { createEmployee, deleteEmployee, getEmployee, listEmployees, updateEmployee } from "../controllers/employee.controller.js";
import { requireAuth, requireRole } from "../middleware/auth.middleware.js";
const router = Router();
router.use(requireAuth);
router.get("/", listEmployees); router.get("/:id", getEmployee);
router.post("/", requireRole("admin", "hr"), createEmployee); router.patch("/:id", requireRole("admin", "hr"), updateEmployee); router.delete("/:id", requireRole("admin", "hr"), deleteEmployee);
export default router;
