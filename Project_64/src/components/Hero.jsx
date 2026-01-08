import { useState } from "react"
import toast from "react-hot-toast"



const Hero= () => {

    
    
    const [queueData,setQueueData]=useState(()=>{
        const saved=localStorage.getItem("data")
        return saved?JSON.parse(saved):[]
    })

    const [customer,setCustomer]=useState({customerName:"",customerService:""})


    const onAdd=()=>{
        if(customer.customerName.trim()==="") return toast.error('Please Enter Your Name')
        else if (customer.customerService==="") return toast.error('Please Select Your Service')
        const newData=[...queueData,{id:(queueData.length+1),name:customer.customerName,serviceName:customer.customerService,status:"waiting"}]
        localStorage.setItem("data",JSON.stringify(newData))
        setQueueData(newData)
        setCustomer({customerName:"",customerService:""})
        toast.success('Service Added')
    }

    const onServe=(id)=>{
        const findIndex=queueData.findIndex(data=>data.id===id)
        
        let statu="waiting"
        if(queueData[findIndex].status==="waiting") statu="serving"
        else if(queueData[findIndex].status==="serving") statu="completed"
        

        const newData=queueData.map(data=>{
            if(data.id===id){
                return { ...data, status:statu}
            }
            return data
        })
        localStorage.setItem("data",JSON.stringify(newData))
        setQueueData(newData)

    }

    const onDelete=(id)=>{
        const newData=queueData.filter(data=>data.id!==id)
        localStorage.setItem("data",JSON.stringify(newData))
        setQueueData(newData)

    }
    return (
        <section>
            <h1>Queue Management System</h1>
            <p>Manage Your Customers Efficiently</p>
            <div className="section">
            <div className="main-container">
                <div className="card1">
                    <h1>Add to Queue</h1>
                    <input value={customer.customerName} name="customerName" onChange={(e)=>setCustomer({...customer,[e.target.name]:e.target.value})} placeholder="Customer Name:" alt="name"/>
                    <select name='customerService' onChange={(e)=>setCustomer({...customer,[e.target.name]:e.target.value})} value={customer.customerService} >
                        <option value="" disabled>Select Service</option>
                        <option>Payment</option>
                        <option>Customer</option>
                        <option>Business Owner</option>
                        <option>Udemy</option>
                    </select>
                    <button onClick={onAdd}>Add Customer</button>
                </div>
                <div className="card2">
                    <h1>Current Queue</h1>
                    <div className="card2-con">
                        {queueData.length===0?<p>No Customers in Queue</p>:null}
                        {queueData.map(person=>(
                            <div key={person.id} className="service-card">
                                <div className="content">
                                    <h1 style={{color:'black',margin:'0px'}}>{person.name}</h1>
                                    <p style={{color:'black' ,margin:'0px'}}>Service :{person.serviceName}</p>
                                    <p style={{color:'black'}}>{person.status}</p>
                                </div>
                                <div className="btns">
                                    {person.status==="waiting"?(<button onClick={()=>onServe(person.id)}>Serve</button>):person.status==="serving"?(<button onClick={()=>onServe(person.id)}>Complete</button>): person.status==="completed"?<button disabled>Completed</button>:null}
                                    <button onClick={()=>onDelete(person.id)}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        </section>
        
    )
}

export default Hero