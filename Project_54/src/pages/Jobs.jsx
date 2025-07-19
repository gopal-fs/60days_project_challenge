import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Jobs = () => {
    const jobsData=useLoaderData()
    

    return (
      <div className='job-details'>

        {jobsData.map((job) => (
          <Link to={job.id.toString()} className='details' key={job.id}>
            <p>{job.title}</p>
            <p>{job.company}</p>
          </Link>
        ))}
      </div>
    )
    
}

export default Jobs


export const dataLoader=async()=>{
    const fetchData=await fetch('http://localhost:5000/jobs')
    return fetchData.json();
}