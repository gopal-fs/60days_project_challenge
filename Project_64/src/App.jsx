import React from 'react'
import Hero from './components/Hero'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Hero />
      <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default App