import React from 'react'
import { Link, NavLink, replace, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate()
  return (
    <div className='navbar'>
        <ul>
            <NavLink to='/'><li>Home</li></NavLink>
            <NavLink to='/products'><li>Products</li></NavLink>
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact</li></NavLink>
            <NavLink to='/jobs'><li>Jobs</li></NavLink>
        </ul>
        <button onClick={()=>navigate('/contact',{replace:true})} className='btn'>Get Started</button>
    </div>
  )
}

export default Navbar