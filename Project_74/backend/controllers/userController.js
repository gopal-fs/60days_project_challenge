


export const userData=async(req,res)=>{
    const {user_id,email}=req.payload 
    return res.status(200).send({user_id,email})
}