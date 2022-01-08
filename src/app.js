import express, {json} from "express";
import morgan from "morgan";

// importing routes
import rolesRoutes from "./routes/roles.routes";

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use("/api/roles", rolesRoutes);

export default app;