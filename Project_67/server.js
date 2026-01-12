import express from "express"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import { connectDB, db } from "./configs/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { verifyToken } from "./middlewares/verifyToken.js"
import router from "./routers/userRouter.js"


dotenv.config()

const app=express()
app.use(express.json())
app.use('/api/demo',router)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

app.post("/addStudent",async(req,res)=>{
    const {name,age,course,address}=req.body
    const addStudentQuery=`insert into students(name,age,course,address) values('${name}',${parseInt(age)},'${course}','${address}')`
    await db.run(addStudentQuery)
    res.send("Student Added Successfully")
})

app.get("/students",async(req,res)=>{
    const {name,age}=req.query
   
    let query=`select * from students`
    if(name && age){
        query=`select * from students where name='${name}' and age=${parseInt(age)}` 
    }
  
    const data=await db.all(query)
    res.send(data)

})


app.post('/register',async(req,res)=>{
    try{
        const {name,email,password}=req.body 
        const checkUser=await db.get(`select * from users where email='${email}'`)
        if(checkUser) return res.send("User Already Exists!")
        const hashedPassword=await bcrypt.hash(password,12)
        const onAddUser=await db.run(`insert into users (name,email,password) values('${name}','${email}','${hashedPassword}')`)
        res.send("User Register Succesfully")

    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
})

app.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
       
        const checkUser=await db.get(`select * from users where email='${email}'`)
        
        if(!checkUser) return res.status(404).send("User Not Found")
        const checkPassword=await bcrypt.compare(password,checkUser.password)
    
        if(!checkPassword) return res.status(400).send("Passsword is Incrorrect")

            const payload={id:checkUser.id,email}

        const token=jwt.sign(payload,"HelloBro",{expiresIn:"1m"})
        console.log(token)
        res.send({token,message:"Login Success"})



    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
})

app.get("/gopal",verifyToken,(req,res)=>{
    const{id,email}=req.payload
    res.send({id,email})
})

app.listen(3000,()=>{
    connectDB()
    console.log("Server Running on Port 3000")
})

