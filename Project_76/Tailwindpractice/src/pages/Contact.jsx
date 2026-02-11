import React from 'react'

const Contact = ({contactRef}) => {
  return (
    <div ref={contactRef} className='h-[100vh] w-full bg-yellow-500 flex flex-col justify-center items-center'>
        <h1 className='text-8xl text-black'>Contact Page</h1>
    </div>
  )
}

export default Contact