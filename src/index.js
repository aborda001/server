import {app} from "./app";
import { createTables } from "./database/init.db";

const port = process.env.PORT || 3000;

app.listen(port);

createTables();

console.log(`Server running on port ${port}`);