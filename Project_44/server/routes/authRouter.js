import { Router } from "express";
import { Register } from "../controllers/auth.js";

const authRouter= Router();


authRouter.post('/register',Register)

export default authRouter;