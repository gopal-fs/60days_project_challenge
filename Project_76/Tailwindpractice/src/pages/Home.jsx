import React from 'react'

const Home = ({homeRef}) => {

   

  return (
    <div ref={homeRef} className='mt-[10vh] h-[90vh] w-full bg-red-500  flex-center'>

        <h1 className='text-8xl text-white'>Home Page</h1>

    </div>
  )
}

export default Home