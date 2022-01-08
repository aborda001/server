import {app} from "./app";
import { createTables } from "./database/init.db";
import { createRol } from "./database/initrol";

const port = process.env.PORT || 3000;

app.listen(port);

createTables();
createRol();

console.log(`Server running on port ${port}`);