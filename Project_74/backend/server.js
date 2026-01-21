import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/authRouter.js"
import { connectDB } from "./configs/db.js"
import userRouter from "./routes/userRouter.js"

dotenv.config()


const app=express()


app.use(express.json())
app.use('/demo/api',authRouter)
app.use('/demo/api',userRouter)
await connectDB()

app.listen(process.env.PORT,()=>console.log(`Server Runnig on : http://localhost:${process.env.PORT}`))