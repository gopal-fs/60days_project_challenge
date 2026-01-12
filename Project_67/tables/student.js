import {db} from "../configs/db.js";



export const createStudentTable=()=>{
    db.run(
        `create table if not exists
        students(name varchar(30), age int,course varchar(40),address text)`
    );

    db.run(
        `CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  password text)`

    );

}


