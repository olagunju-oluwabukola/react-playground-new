import React from 'react'
import { useState } from 'react';
const JobLists = ({job}) => {
  const [showFulldetails, setShowFullDetails] = useState(false)
  let detail = job.details
  if(!showFulldetails){
    detail = detail.substring(0, 90)+ "..."
  }

  return (
    <div>
          <div className="bg-blue-100 mb-6  p-6 shadow-2xl rounded-xl">
            <div className="flex justify-between">
  <p className="font-normal bg-blue-700 inline-block text-white p-1 text-sm rounded-4xl">${job.pay_per_hour}/hr</p>
  <p className="text-xs font-semibold">{job.location}</p>
            </div>

                <p className="font-semibold text-xl my-4">{job.role}</p>
 <p className="my-4 text-sm font-thin text-justify">{detail} <span onClick={()=>setShowFullDetails((prev)=>(!prev))} className='cursor-pointer text-indigo-500 font-semibold'>{showFulldetails ? "less" : "more" }</span></p>
                <p className="mb-4 text-indigo-700">{job.tech_stack.join(" ")}</p>

                <button className="bg-white w-full p-2 rounded-2xl mt-3">Read More</button>

                </div>
    </div>
  )
}

export default JobLists;