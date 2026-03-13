import express from "express"
import cors from "cors"
import {fileURLToPath} from "url"
import path from "path"


const app=express()
app.use(cors())

app.use((req,res,next)=>{
    res.setHeader('X-FRAME-OPTIONS','DENY');
    next();

})

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)


app.get('/iframe1',(req,res)=>{
    res.sendFile(__dirname+'/public/iframe1.html')
})

app.get('/iframe2',(req,res)=>{
    res.sendFile(__dirname+'/public/iframe2.html')
})

app.listen(3001,()=>{console.log("Running")})