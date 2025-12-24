import { open } from "sqlite";
import sqlite3 from "sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import { createTable } from "../tables/StudentTable.js";

let db = null;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "server.db");

const connectDB = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    console.log("DB Connected!");

    // ✅ PASS SAME DB INSTANCE
    await createTable(db);

    console.log("students table ready");

    return db;
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

export { connectDB,db};
