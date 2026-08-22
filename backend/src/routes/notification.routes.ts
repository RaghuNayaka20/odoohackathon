import { Router } from "express";
import { listNotifications, markRead } from "../controllers/notification.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = Router(); router.use(requireAuth); router.get("/", listNotifications); router.patch("/:id/read", markRead);
export default router;
