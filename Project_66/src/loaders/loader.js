export const jobDetailsLoader = async ({ params }) => {
  
    const { jobId } = params;
    const res = await fetch(`http://localhost:5000/jobs/${jobId}`);
    if(!res.ok) throw new Error("Job Not Found with that respective id");
    return await res.json();
  
};


export const jobsData= async()=>{
    const res=await fetch('http://localhost:5000/jobs')
    return res.json()
    
  }