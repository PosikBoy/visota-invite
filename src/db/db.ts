import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "src", "db", "database.db");
const db = new Database(dbPath);

// Создаем таблицу, если её нет
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    full_name_id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    is_invitation_accepted BOOLEAN NOT NULL DEFAULT 0
  );
`);

// db.exec(
//   `
//   INSERT OR IGNORE INTO users (full_name_id, full_name)
// VALUES ('alisa-isaeva', 'Алиса Исаева');`
// );

export default db;
