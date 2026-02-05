import React from 'react'
import { NavLink } from 'react-router-dom'

const navbar = () => {
    const LinkClass = ({isActive}) => isActive ? "bg-black text-white rounded-md p-2" : "text-black hover:bg-black p-2 hover:text-white rounded-md"
  return (
    <div className='flex justify-between bg-blue-100 rounded-xl shadow-xl p-4 m-10'>
        <NavLink  to="/" className="text-3xl font-bold">Joblist</NavLink>
        <div className='flex gap-8 font-semibold '>
            <NavLink className={LinkClass}  to="/">Home</NavLink>
            <NavLink  className={LinkClass}  to="/jobs">Jobs</NavLink>
            <NavLink className={LinkClass}  to="/add-jobs">Add Jobs</NavLink>

        </div>
    </div>
  )
}

export default navbar