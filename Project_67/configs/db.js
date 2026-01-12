

import { watch } from "fs"
import path from "path"
import {open} from "sqlite"

import sqlite3 from "sqlite3"
import { fileURLToPath } from "url"
import { createStudentTable } from "../tables/student.js"


const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
console.log(__dirname)

const dbPath=path.join(__dirname,"..","students.db")


let db=null 

const connectDB=async()=>{
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database

        })
        console.log(`DB Connected`)
        createStudentTable()


    }
    catch(err){
        console.log(`DB Error:${err.message}`)
    }

}



export  {db,connectDB}
