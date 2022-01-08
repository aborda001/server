import { Client } from "pg";
import { config } from "./config"

export const client = new Client({
    user : config.user,
    password: config.password,
    host: config.host,
    port: config.port,
    database: config.database,
});