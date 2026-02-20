import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function initializeDb(db: Database.Database): void {
  db.exec(`                                                                                                                                                                                                         
      CREATE TABLE IF NOT EXISTS messages (                                                                                                                                                                           
        id INTEGER PRIMARY KEY AUTOINCREMENT,                                                                                                                                                                         
        name TEXT NOT NULL,                                                                                                                                                                                           
        message TEXT NOT NULL                                                                                                                                                                                         
      )                                                                                                                                                                                                               
    `);
}

const dbPath =
  process.env.DB_PATH || path.join(__dirname, "../../data/messages.db");

const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}
const db = new Database(dbPath);
initializeDb(db);

export default db;
