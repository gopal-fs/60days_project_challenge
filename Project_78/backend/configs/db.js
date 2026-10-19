


import {open} from "sqlite"
import sqlite3 from "sqlite3"
import path from "path"
import { fileURLToPath } from "url"
import { createStudentTable } from "../tables/studentTable.js"



const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)


const dbPath=path.join(__dirname,'..',"Students.db")
let db=null 

const connectDB=async()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database
        })
        await createStudentTable()
        console.log("DB Connected")
    }
    catch(err){
        process.exit(1)
        console.log(`DB Error:${err.message}`)
    }
}

export {db,connectDB}