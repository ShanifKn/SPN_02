import express from "express";
import { inviteAgent } from "../controllers/adminControllers.js";
const router = express.Router();

// * ADMIN LOGIN *//
router.post("/invite", inviteAgent);

export default router;
