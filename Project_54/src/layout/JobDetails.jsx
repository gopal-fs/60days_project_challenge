import React from 'react'
import { Outlet } from 'react-router-dom'

const JobDetails = () => {
  return (
    <div>
        <h1>Job Openings</h1>
        <p>List of Job Opening Today!</p>
        <Outlet />
    </div>
  )
}



export default JobDetails