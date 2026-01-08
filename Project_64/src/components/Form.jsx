import React from 'react'

const Form = () => {
    const [customer,setCustomer]=useState({customerName:"",customerService:""})
  return (
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
  )
}

export default Form