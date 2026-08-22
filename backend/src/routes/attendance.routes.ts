import { Router } from "express";
import { checkIn, checkOut, listAttendance } from "../controllers/attendance.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = Router(); router.use(requireAuth);
router.get("/", listAttendance); router.post("/check-in", checkIn); router.patch("/:id/check-out", checkOut);
export default router;
