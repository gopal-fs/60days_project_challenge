import React from 'react'
import { useLoaderData} from 'react-router-dom'

const Details = () => {

    const jobData=useLoaderData()
   
  return (
    <div>
        <h1>{jobData.salary}</h1>
    </div>
  )
}

export default Details

export const getJobData=async({params})=>{
    const {id}=params
    const getData=await fetch('http://localhost:5000/jobs/'+id)
    if(!getData.ok){
        throw Error('Could not found job details')
    }
    return getData.json()
}