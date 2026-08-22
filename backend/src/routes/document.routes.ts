import { Router } from "express";
import { listDocuments, uploadDocument } from "../controllers/document.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
const router = Router(); router.use(requireAuth); router.get("/:employeeId", listDocuments); router.post("/:employeeId", upload.single("file"), uploadDocument);
export default router;
