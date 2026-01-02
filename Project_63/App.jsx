import React from 'react'
import { useMediaQuery } from 'react-responsive'
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'




gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 })

  useGSAP(() => {

    const start = isMobile ? 'top 20%' : 'top top'
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: start,
        end: '+=200%',        // 🔥 KEY FIX
        scrub: 1.5,
        pin: true,
        pinSpacing: true,
                 // debug
      }
    })
  
    tl.to('.heading', {
      opacity: 0,
      y: -150,
      ease: 'power1.inOut'
    })
  
    tl.to('.overlay', {
      opacity: 0,
      y: -150,
      ease: 'power4.out'
    }, '<')
  
    tl.to('.glass', {
      opacity: 0,
      y: 150,
      ease: 'power4.out'
    })
  
  }, [isMobile])
  

  return (
    <div className='container'>
      <div className='section1'></div>
      <div className='section2'>
        <div className='image'>
          <div className='top'>
          <h1 className='heading'>The ART
          </h1>
          <img className='glass' src='/mask-img.png' alt='mask' />
          </div>
          
          <div className='overlay'>
        <div className='con'>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Handpicked ingredients</p>
          </div>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Signature techniques</p>
          </div>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Bartending artistry in action</p>
          </div>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Freshly muddled flavors</p>
          </div>
        </div>
        <div className='con'>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Perfectly balanced blends</p>
          </div>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Garnished to perfection</p>
          </div>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Ice-cold every time</p>
          </div>
          <div>
            <img src='/check.png' alt='check'/>
            <p>Expertly shaken & stirred</p>
          </div>
        </div>
        </div>


        </div>

        
        
        
      </div>
      <div className='section3'></div>
    </div>
  )
}

export default App