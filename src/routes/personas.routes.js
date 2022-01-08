import { Router } from "express";
const router = Router();

import * as personasController from "../controllers/personas.controller";

//routes /api/personas
router.post("/", personasController.createPersona);
router.get("/", personasController.getPersonas);
router.get("/:id", personasController.getPersonaById);
router.put("/:id", personasController.updatePersonaById);
router.delete("/:id", personasController.deletePersonaById);

export default router;