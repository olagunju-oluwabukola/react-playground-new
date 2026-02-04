import jobs from "../jobs.json"
import JobLists from "./JobLists"
const JobList = () => {
  const recentJob = jobs.slice(0, 4)
  return(
      <>
      <div>
        <div className="  mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {recentJob.map((job) =>(
            <JobLists job={job} key={job.id} />
            ))}
        </div>
      </div>
    </>
  )
}
export default JobList