import express from "express";
import client from "./main.js";

const app = express();

const PORT = 3000;

// middleware
app.use(express.json());


app.get('/customers',async(req,res)=>{
    client.getAll(null,(err,data)=>{
        if(err) return res.send("An Error Occured");
        return res.send(data.customers);
    })
})

app.get('/customers/:id',(req,res)=>{
    const {id}=req.params;
    client.getCustomer({id},(err,data)=>{
        return res.send(data)
    })
})

app.post('/addCustomer',(req,res)=>{
    const {name,email,phone,city,age}=req.body;
    client.addCustomer({name,email,phone,city,age:Number(age)},(err,data)=>{
        res.send(data);
    })
})



// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});