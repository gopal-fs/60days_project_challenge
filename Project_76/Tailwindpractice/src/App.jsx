import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  const homeRef=useRef(null);
  const workRef=useRef(null);
  const aboutRef=useRef(null);
  const contactRef=useRef(null);

  
const sectionRefs={
  homeRef,workRef,aboutRef,contactRef
}

const onScroll=(ref)=>{

    ref.current?.scrollIntoView({behavior:"smooth"})

}

  return (
    <div className='w-full min-h-screen bg-white'>
      <Navbar  navigate={onScroll} refs={sectionRefs} />
      <Home homeRef={homeRef} />
      <Work workRef={workRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
    </div>
  )
}

export default App