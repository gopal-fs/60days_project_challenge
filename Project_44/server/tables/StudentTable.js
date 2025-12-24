

export const createTable = async (db) => {
    await db.exec(`
      CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userName TEXT NOT NULL,
        email TEXT NOT NULL
      );
    `);
  };
  