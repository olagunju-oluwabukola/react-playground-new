import React from 'react'
import JobList from '../components/JobListing'
const jobsPage = () => {
  return (
    <div className='p-10'>
<JobList isHome = {false}/>
    </div>
  )
}

export default jobsPage