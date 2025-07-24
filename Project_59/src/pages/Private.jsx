import React, { useContext } from 'react'
import { authContext } from '../context/useContext'

const Private = () => {

  const {user}=useContext(authContext)
  console.log(user)
  return (
    <div>
        <h1>{user.displayName}</h1>
        <p>{user.email}</p>
    </div>
  )
}

export default Private