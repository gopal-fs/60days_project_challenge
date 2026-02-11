import React from 'react'

const About = ({aboutRef}) => {
  return (
    <div ref={aboutRef} className='h-[100vh] w-full bg-violet-500 flex flex-col justify-center items-center'>
        <h1 className='text-8xl text-white font-bold'>About Page</h1>
    </div>
  )
}

export default About