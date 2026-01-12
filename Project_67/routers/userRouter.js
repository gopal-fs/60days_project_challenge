import express from "express"
import { getData } from "../controllers/userController.js"

const router=express.Router()


router.get("/user",getData)

export default router

