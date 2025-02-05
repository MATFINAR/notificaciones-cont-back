import { createPool } from "mysql2/promise";
import { config } from "dotenv";

config();

const pool = createPool({
    user: process.env.MYSQLUSER,
    host: process.env.MYSQLHOST,
    password: process.env.MYSQLPASSWORD,
    port: process.env.MYSQLPORT,
    database: process.env.MYSQLDATABASE,
});

export default pool;