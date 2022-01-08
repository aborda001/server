import express, {json} from "express";
import morgan from "morgan";

// importing routes
import rolesRoutes from "./routes/roles.routes";
import personasRoutes from "./routes/personas.routes";

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use("/api/roles", rolesRoutes);
app.use("/api/personas", personasRoutes);

export default app;