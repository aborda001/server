import express, {json} from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import session from "express-session";

// importing routes
import rolesRoutes from "./routes/roles.routes";
import personasRoutes from "./routes/personas.routes";
import usuariosRoutes from "./routes/usuarios.routes";
import authRoutes from "./routes/auth.routes"
import publicRoutes from "./routes/public.routes"

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//public routes
app.use("/", publicRoutes);

// routes
app.use("/api/roles", rolesRoutes);
app.use("/api/personas", personasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/auth", authRoutes);


export {app, session};