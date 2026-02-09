import { useState, useEffect } from "react"
// import jobs from "../jobs.json"
import Spinners from "./spinners"
import JobLists from "./JobLists"

const JobList = ({isHome = false}) => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

   useEffect(() => {
    const fetchJobs = async ()=>{
      try{
        const res = await fetch("/api/jobs");
        const data = await res.json()
        setJobs(data)
      }
      catch(error){
        console.log(error)
      } finally{
        setLoading(false)
      }
    };
    fetchJobs()
  }, [])

  const jobListing = isHome ? jobs.slice(0, 4) : jobs;
  return(
      <>
      <div>
         <div className='text-4xl text-center my-16 font-bold'>{isHome ? 'Browse Available Roles' : " All Roles"}</div>
        <div className="">

          {loading ? (<Spinners loading = {loading} />) :(<div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
             {jobListing.map((job) =>(
            <JobLists job={job} key={job.id} />
            ))}
          </div>) }

        </div>
      </div>
    </>
  )
}
export default JobList