import express from "express";
import cors from "cors"

import { Server } from "socket.io";
import {createServer} from "http";


const app=express()
const server=createServer(app);

let messages=[];

const io=new Server(server,{cors:"*"});

io.on("connection",(socket)=>{
    console.log(socket.id)

    io.emit("messages",messages);

    socket.on("joinRoom",(room)=>{
        console.log(room)
        socket.join(room)
    })

    socket.on("newMessage",(msg,room)=>{
        messages.push(msg);
       if(room===""){
        io.emit("messages",messages);
     
       }
       else{
        socket.broadcast.to(room).emit("messages",messages);
       }

       
       
        
        
    })
})






server.listen(3000,()=>{console.log("Hello Running")})