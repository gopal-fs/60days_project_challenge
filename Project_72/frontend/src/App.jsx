import React from 'react'
import Landing from './pages/Landing'
import Home from './pages/Home'
import {Routes,Route} from "react-router"
import {Toaster} from "react-hot-toast"
import Login from './pages/Login'



const App = () => {
  
  return (
    <div>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />}/>
    </Routes>

    <Toaster position="top-center" reverse={false} />
    </div>
    
   
  )
}

export default App