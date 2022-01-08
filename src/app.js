import express, {json} from "express";

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

export default app;