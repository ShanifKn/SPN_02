import express from "express";
import { inviteAgent, verifyMail } from "../controllers/adminControllers.js";
const router = express.Router();

// * ADMIN LOGIN *//

//* SEND INVITATION & VERIFY*//
router.post("/invite", inviteAgent);
router.get("/verify-token/:generateCode", verifyMail);

export default router;
