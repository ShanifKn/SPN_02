import express from "express";
import { getBusList } from "../controllers/agentControllers.js";
import { verifyToken } from "../middleware/authToken.js";
const router = express.Router();

//* FETCH BUS LIST *//
router.get("/bus-list", verifyToken,getBusList)

export default router;
