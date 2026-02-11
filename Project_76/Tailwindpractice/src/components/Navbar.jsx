import React from 'react'

const Navbar = ({refs,navigate}) => {
  return (
    <div className='h-[10vh] w-full bg-bgColor flex pl-6 pr-6 justify-between items-center fixed top-0 left-0 animate-fadeIn
'>

        <h1 className='text-4xl text-white font-semibold'>Logo</h1>

        <ul className='md:flex list-none m-0 p-0 flex items-center gap-5 hidden'>
            <li onClick={()=>navigate(refs.homeRef)} className='list-none m-0 p-0 text-white text-[18px] cursor-pointer'>Home</li>
            <li onClick={()=>navigate(refs.workRef)} className='list-none m-0 p-0 text-white text-[18px] cursor-pointer'>See My Work</li>
            <li onClick={()=>navigate(refs.aboutRef)} className='list-none m-0 p-0 text-white text-[18px] cursor-pointer'>About</li>
            <li onClick={()=>navigate(refs.contactRef)} className='list-none m-0 p-0 text-white text-[18px] cursor-pointer'>Contact</li>
            
        </ul>

        <button className='bg-white border-none rounded-[20px] h-[36px] w-[120px] text-black'>Get Started</button>

    </div>
  )
}

export default Navbar