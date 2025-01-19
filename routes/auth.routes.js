import { Router } from "express";
import { checkUser } from "../controllers/auth.controller.js";

const router = Router();

router.post("/check-user", checkUser);

export default router;
