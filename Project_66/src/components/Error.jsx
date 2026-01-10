import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error=useRouteError()
  return (
    <div className='container'>
        <h1>{error?.message || "An Error Occured"}</h1>
    </div>
  )
}


export default Error