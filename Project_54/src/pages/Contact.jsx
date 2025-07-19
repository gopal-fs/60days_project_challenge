import React from 'react'
import { replace, useNavigate } from 'react-router-dom'

const Contact = () => {


  const navigate=useNavigate()
  return (
    <div>
        <h1>Contact Page</h1>
        <div className='buttons'>
          <button onClick={()=>navigate('form')}>Contact form</button>
          <button onClick={()=>navigate('info')}>Contact Info</button>
        </div>
    </div>
  )
}

export default Contact