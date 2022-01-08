import { Router } from "express";
const router = Router();

import * as publicController from "../controllers/public.controller"

router.get("/home", publicController.home);
router.get("/signup", publicController.signup);
router.get("/login", publicController.login);
router.get("/logout", publicController.logout);
router.post("/api/user", publicController.signupUser)

export default router;
