import jwt from "jsonwebtoken"

export const verifyToken=async(req,res,next)=>{
    try{
        const authHeaders=req.headers.authorization
        if(authHeaders===undefined) return res.send("Invalid Token")
        const token=authHeaders.split(' ')[1]
        if(!token) return res.send("Invalid Token")
        jwt.verify(token,"HelloBro",(err,payload)=>{
    if(err) return res.status(500).send("Invalid Token Expired")
        req.payload=payload
        return next()
    
    })
        
    }
    catch(err){
        res.status(500).send("Something went wrong")
    }
}