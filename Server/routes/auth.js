import express from "express";
import { adminLogin, agentRegister } from "../controllers/auth.js";
import upload from "../middleware/multer-s3.js";

const router = express.Router();

// * ADMIN LOGIN *//
router.post("/admin/login", adminLogin);

//* AGENT REGISTRATION *//
router.post("/agent/register", upload.single("image"), agentRegister);

export default router;
