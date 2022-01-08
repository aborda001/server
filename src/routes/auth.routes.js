import { Router } from "express";
const router = Router();

import  * as authController from "../controllers/auth.controller"

//routes /api/auth
router.post("/", authController.signin);

export default router;