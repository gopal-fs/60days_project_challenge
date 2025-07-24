import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Private from './pages/Private'
import Register from './pages/Register'
import { authContext } from './context/useContext'
import { Toaster } from 'react-hot-toast'

const App = () => {
  const {user}=useContext(authContext)
  return (
    <div>
       <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={user?<Private/>:<Navigate to='/login'/>}/>
      </Routes>
    </div>
  )
}

export default App