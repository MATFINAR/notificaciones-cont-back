import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

const pool = createPool({
    database: process.env.MYSQLDATABASE,
    host: process.env.MYSQLHOST,
    password: "",
    user: process.env.MYSQLUSER,
    port: process.env.MYSQLPORT
});

export default pool;