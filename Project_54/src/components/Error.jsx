import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const navigate=useNavigate()
    const error= useRouteError()
  return (
    <div>
        <p>{error.message}</p>
        <button onClick={()=>navigate('/')}></button>
    </div>
  )
}

export default Error