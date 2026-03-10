import grpc from "@grpc/grpc-js";
import  protoLoader from  "@grpc/proto-loader";

const packageDef = protoLoader.loadSync("../customers.proto", {});
const customersProto = grpc.loadPackageDefinition(packageDef);


//customers
const customers = [
    {
      id: "c1",
      name: "Ravi Kumar",
      email: "ravi.kumar@gmail.com",
      phone: "9876543210",
      city: "Hyderabad",
      age: 28
    },
    {
      id: "c2",
      name: "Anjali Sharma",
      email: "anjali.sharma@gmail.com",
      phone: "9123456780",
      city: "Delhi",
      age: 25
    },
    {
      id: "c3",
      name: "Suresh Reddy",
      email: "suresh.reddy@gmail.com",
      phone: "9988776655",
      city: "Bangalore",
      age: 32
    },
    {
      id: "c4",
      name: "Priya Nair",
      email: "priya.nair@gmail.com",
      phone: "9871122334",
      city: "Chennai",
      age: 29
    },
    {
      id: "c5",
      name: "Arjun Patel",
      email: "arjun.patel@gmail.com",
      phone: "9012345678",
      city: "Ahmedabad",
      age: 35
    },
    {
      id: "c6",
      name: "Meera Joshi",
      email: "meera.joshi@gmail.com",
      phone: "9345678901",
      city: "Pune",
      age: 27
    },
    {
      id: "c7",
      name: "Rahul Verma",
      email: "rahul.verma@gmail.com",
      phone: "9765432109",
      city: "Mumbai",
      age: 31
    },
    {
      id: "c8",
      name: "Sneha Gupta",
      email: "sneha.gupta@gmail.com",
      phone: "9898989898",
      city: "Kolkata",
      age: 26
    }
  ];

// server create
const server = new grpc.Server();

server.addService(customersProto.CustomerService.service,{
    getAll:(call,callback)=>{
        callback(null,{customers});
    
    },
    getCustomer:(call,callback)=>{
        const id = call.request.id;
    
        const customer = customers.find(cus => cus.id === id);
    
        callback(null, customer);
    },

    addCustomer:(call,callback)=>{
        const data=call.request;
        const newCustomer={id:"c"+customers.length+1,...data}
        customers.push(newCustomer);
        callback(null,newCustomer)

    },

   




    
})


// start server
server.bindAsync(
    "0.0.0.0:50051",
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log("gRPC server running on port", port);
      server.start();
    }
  );