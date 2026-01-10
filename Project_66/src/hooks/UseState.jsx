import React, { useRef, useState } from 'react'
import { GetLocalStorage, RemoveLocalStorage, UseLocalStorage } from './CustomHook'

const UseState = () => {
  const ref=useRef(null)
    const [counter,setCounter]=useState(()=>{
      const getValue=parseInt(GetLocalStorage())
      
      if(getValue) return getValue
      return 0
    })

    const onIncrease=()=>{
      setCounter(prev=>prev+1)
      UseLocalStorage(counter+1)
    }

    const onRemove=()=>{
      setCounter(0)
      RemoveLocalStorage()
    }
  return (
    <div>
        <h1>UseState Hook</h1>
        <p>{counter}</p>
        <input ref={ref} />
        <button onClick={()=>ref.current.focus()}>Focus</button>
        <button onClick={onIncrease}>Increase</button>
        <button onClick={onRemove}>Remove Value</button>
    </div>
  )
}

export default UseState