import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='navbar'>
        <img src='/logo.png' alt='logo' />
        <nav>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="products"><li>Products</li></NavLink>
            <NavLink to="about"><li>About</li></NavLink>
            <NavLink to="contact"><li>Contact</li></NavLink>
            <NavLink to="jobs"><li>Jobs</li></NavLink>
            <NavLink to="hooks"><li>Hooks</li></NavLink>
        </nav>
        <button onClick={()=>navigate('contact',{replace:true})}>Get Started</button>

    </div>
  )
}

export default Navbar