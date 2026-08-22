import { Router } from "express";
import { dashboard } from "../controllers/analytics.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
const router = Router(); router.use(requireAuth); router.get("/dashboard", dashboard);
export default router;
