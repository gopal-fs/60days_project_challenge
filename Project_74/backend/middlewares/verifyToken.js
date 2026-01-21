import jwt from "jsonwebtoken"


export const verifyToken=async(req,res,next)=>{
    try{
        const authHeaders=req.headers.authorization 
        if(authHeaders===undefined) return res.status(400).send("Invalid Token")
        const token=authHeaders.split(" ")[1]
        if(!token) return res.status(400).send("Invalid Token")
        jwt.verify(token,"hellobro",(err,payload)=>{
            if(err) return res.status(400).send("Token Expired")
            req.payload=payload
            next()
    })

    }
    catch(err){
        return res.status(500).send(err.message)
    }
}