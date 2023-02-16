import express from "express";
import { adminLogin } from "../controllers/auth";

const router = express.Router();

// * ADMIN LOGIN *//
router.post("/admin/login", adminLogin);

export default router;
