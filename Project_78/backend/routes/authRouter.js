import express from "express"
import { getUser, getUsers, login, register } from "../controllers/authController.js"

const authRouter=express.Router()


authRouter.post('/login',login)
authRouter.post('/register',register)
authRouter.get('/getUser/:id',getUser)
authRouter.get('/getUsers',getUsers)

export default authRouter