import express from "express"
import cors from "cors"
import {fileURLToPath} from "url"
import path from "path"


const app=express()
app.use(cors())

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)


app.get('/example1',(req,res)=>{
    res.sendFile(__dirname+'/public/example1.html')
})

app.get('/example2',(req,res)=>{
    res.sendFile(__dirname+'/public/example2.html')
})

app.listen(3000,()=>{console.log("Running")})