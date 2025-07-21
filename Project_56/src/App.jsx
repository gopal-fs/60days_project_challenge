import React, { useEffect, useMemo, useRef, useState } from 'react'

const App = () => {
  

  const [counter,setCounter]=useState(0)
  const [number,setNumber]=useState(0)
  const inputElement=useRef('')
  const countRef=useRef(0)
  


  useEffect(()=>{
    console.log('Use Effect Rendered!')


    

  },[number])

  const updateRef=()=>{
    countRef.current=countRef.current+1
  }

  const onSubmit=()=>{
    alert(inputElement.current.value)
  }

  const calculateCube=()=>{
    console.log(number)
  }


  const result=useMemo(calculateCube,[counter])

  



  return (
    <>


    {/* Use State Method Logic */}
    <h1>Counter : {counter}</h1>
    <button onClick={()=>setCounter(prev=>prev+1)}>Increase</button>
    <button onClick={()=>setCounter(prev=>prev-1)}>Decrease</button>


    {/* Use Ref Hook Method */}
    <h1>Ref Render Count : {countRef.current}</h1>
    <button onClick={updateRef}>Increase</button>

    {/* Accessing DOM Elelements Using  Use Ref Hook Method */}

    <input type='text'  ref={inputElement}  />
    <button onClick={onSubmit}>Submit</button>

   {/* Use Memo Hook Method */}
   
   

    </>
  )
}

export default App