import { Router } from "express";
const router = Router();

import * as rolesController from "../controllers/roles.controller";

//routes /api/roles
router.post("/", rolesController.createRole);
router.get("/", rolesController.getRoles);
router.get("/:id", rolesController.getRoleById);
router.put("/:id", rolesController.updateRoleById);
router.delete("/:id", rolesController.deleteRoleById);

export default router;