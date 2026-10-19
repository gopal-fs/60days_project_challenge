import { db } from "../configs/db.js"



export const createStudentTable = async () => {
    await db.run(`
        CREATE TABLE IF NOT EXISTS students (
            id integer primary key autoincrement,
            email text not null unique,
            password text not null
        )
    `);
};
