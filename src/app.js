import express, {json} from "express";
import morgan from "morgan";

// importing routes
import rolesRoutes from "./routes/roles.routes";
import personasRoutes from "./routes/personas.routes";
import usuariosRoutes from "./routes/usuarios.routes";

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use("/api/roles", rolesRoutes);
app.use("/api/personas", personasRoutes);
app.use("/api/usuarios", usuariosRoutes);

export default app;