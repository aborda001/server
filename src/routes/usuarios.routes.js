import { Router } from "express";
const router = Router();

import * as usuariosController from "../controllers/usuarios.controller";

//routes /api/usuarios
router.post("/", usuariosController.createUsuario);
router.get("/", usuariosController.getUsuarios);
router.get("/:id", usuariosController.getUsuarioById);
router.put("/:id", usuariosController.updateUsuarioById);
router.delete("/:id", usuariosController.deleteUsuarioById);

export default router;