import React from 'react'
import { Outlet } from 'react-router-dom'
import Jobs from '../pages/Jobs'

const JobLayout = () => {
  return (
    <div>
      <h1>Welcome to Jobs Page</h1>
      <p>Lis of current opening are follows</p>
      
      <Outlet />
    </div>
  )
}

export default JobLayout