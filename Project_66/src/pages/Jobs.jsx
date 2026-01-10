import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Jobs = () => {
  const navigate=useNavigate()
  const jobData=useLoaderData()
  return (
    <div className='job-container'>
        {jobData.map(job=>(
          
          <div onClick={()=>navigate(job.id.toString())} key={job.id} className='job-card'>
            <p>{job.name}-{job.id}</p>
          <p>{job.salary}</p>
          <p>{job.location}</p>
          </div>
          
        ))}
    </div>
  )
}


export default Jobs



