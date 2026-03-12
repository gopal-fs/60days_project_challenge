import express from "express"
import cors from "cors"
import fs from "fs"

const app=express()
app.use(express.json())
app.use(cors())

app.post('/',(req,res)=>{
    const data=req.body;


    fs.writeFile("output.html",data.html,(err,datas)=>{
        console.log("Created")
    })
    
    return res.send("Data Rceived")
})

app.listen(3000,()=>{console.log("Running")})