import React from 'react'

const Work = ({workRef}) => {
  return (
    <div ref={workRef} className='h-[100vh] w-full bg-blue-500 flex flex-col justify-center items-center'>
        <h1 className='text-8xl text-white'>Work Page</h1>
    </div>
  )
}

export default Work