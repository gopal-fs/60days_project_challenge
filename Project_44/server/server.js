import express from 'express'
import cors from 'cors'
import {connectDB,db} from './configs/db.js'
import authRouter from './routes/authRouter.js'

const app=express()

app.use(express.json())

await connectDB();

app.use('/api/',authRouter)


app.listen(3000,()=>{
    console.log('Server Running On http://localhost:3000')
})