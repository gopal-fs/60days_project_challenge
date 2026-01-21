

import express from "express"
import { verifyToken } from "../middlewares/verifyToken.js"
import { userData } from "../controllers/userController.js"


const userRouter=express.Router()

userRouter.get('/getData',verifyToken,userData)

export default userRouter