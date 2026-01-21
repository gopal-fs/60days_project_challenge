import { db } from "../configs/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const login=async(req,res)=>{
    try{
        const {email,password}=req.body 
        const findUser=await db.get(`select * from students where email='${email}'`)
        if(!findUser) return res.status(500).send("Invalid User")
        const isPasswordMatched=await bcrypt.compare(password,findUser.password)
    console.log(isPasswordMatched)
        if(!isPasswordMatched) return res.status(500).send("Invalid Password")
        const payload={
            user_id:findUser.id,
            email:findUser.email}
        const token=jwt.sign(payload,"hellobro",{expiresIn:
            "1m"
        })
        return res.status(200).send({message:"User Login Succesfull",token})

    }
    catch(err){
        res.status(500).send("Invalid User")
    }
}


export const register=async(req,res)=>{
    try{
        const {email,password}=req.body 
        const findUser=await db.get(`select * from students where email='${email}'`)
        if(findUser) return res.status(400).send("User Already Registered!")
        const hashedPassword=await bcrypt.hash(password,13)
        const addUser=await db.run(`insert into students(email,password) values('${email}','${hashedPassword}')`)
        return res.status(200).send("User Registered Successfully")
    }
    catch(err){
        res.status(500).send("Unable to Register User!")
    }
}

export const getUser=async(req,res)=>{
    const {id}=req.params
    if(id){
        const findUser=await db.get(`select * from students where id=${parseInt(id)}`)
        if(!findUser) return res.status(400).send("User Not Found")
        return res.status(200).send({message:"User Found",findUser})
    }
    return res.status(400).send("User Not Found")
    
}

export const getUsers=async(req,res)=>{
    
    const findUsers=await db.all(`select * from students`)
    if(!findUsers) return res.status(400).send("No Users Found")
    return res.status(200).send(findUsers)

}

