import express from "express"
import cors from "cors"
import { fileURLToPath } from "url"
import path from "path"

const app=express()
let data="Initial Data";
const waitingClients=[];
app.use(cors())
app.use(express.json())

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.get("/getData",(req,res)=>{
    const {lastData}=req.query;
    if(data!==lastData){
        return res.send(data);
    }
    else{
        waitingClients.push(res);
    }
})

app.get('/updateData',(req,res)=>{
    const {newData}=req.query;
    data=newData;
    while(waitingClients.length>0){
        const client=waitingClients.pop();
        client.send(data);
    }
    return res.send("Boss My Job Done")
})

app.listen(3000,()=>{console.log("Running On 3000")})