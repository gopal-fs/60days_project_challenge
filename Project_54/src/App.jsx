import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import Contactform from './components/Contactform'
import Notfound from './components/Notfound'
import Jobs, { dataLoader } from './pages/Jobs'
import JobDetails from './layout/JobDetails'
import Details, { getJobData } from './components/Details'
import Error from './components/Error'

const App = () => {

  const router=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='about' element={<About />} />
      <Route path='contact'  element={<ContactLayout />}>
        <Route path='info' element={<ContactInfo />} />
        <Route path='form' element={<Contactform />}/>
      </Route>
      <Route path='jobs' element={<JobDetails/>} >
        <Route index element={<Jobs/>} loader={dataLoader}  />
        <Route path=':id' element={<Details/>} loader={getJobData} errorElement={<Error/>} />
      </Route>
      <Route>

      </Route>
      <Route path='*' element={<Notfound/>} />
    </Route>
  ))
  return (
    <RouterProvider router={router} />
    
  )
}

export default App