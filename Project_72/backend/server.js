import express from "express";

import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())







app.post('/login',(req,res)=>{
  const {email,password}=req.body 
  console.log(email,password)
  let user={
    userId:123456,
    email
  }
  console.log(email,password)
  const finalData={token:"gopalispreparingsobecareful",user}
  return res.status(200).send({message:"Login Succesfull",finalData})
})

app.get("/getUser", (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  if (token !== "gopalispreparingsobecareful") {
    return res.status(401).send({ message: "Invalid token" });
  }

  const user = {
    userId: 123456,
    email: "gopal@gmail.com",
    name: "Gopal"
  };

  res.send({ user });
});



app.listen(3000, () => {
  console.log("Server running");
});














