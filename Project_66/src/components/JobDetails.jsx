import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const JobDetails = () => {
  const job = useLoaderData();
  const navigate=useNavigate();
  
  return (
    <div>
        <div className="job-card">
      <p>
        {job.name}-{job.id}
      </p>
      <p>{job.salary}</p>
      <p>{job.location}</p>
    </div>
        <button className="btn" onClick={()=>navigate('/jobs')}>Back to Jobs</button>
    </div>
    
  );
};

export default JobDetails;




