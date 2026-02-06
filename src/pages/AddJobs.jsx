import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'
const AddJobs = ({addJobSubmit}) => {
    const [role, setRole] = useState("")
    const [pay, setPay] = useState("")
    const [stack, setStack] = useState("")
    const [details, setDetails] = useState("")
    const [location, setLocation] = useState("")
    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        // console.log(role,pay,stack,details,location )

        const newJob = {
            role,
            pay,
            stack,
            details,
            location
        }
        addJobSubmit(newJob);
        return navigate("/jobs")
    }
  return (
    <div className=''>
        <form onSubmit={submitForm} className=''>
            <div className=' grid place-items-center text-blue-900'>
                <div className='bg-blue-100  rounded-xl p-26'>
                    <div className='text-center mb-4 font-bold text-2xl capitalize'>Add Jobs </div>
                <div className='grid '>
                <label htmlFor="Role" className='font-bold'>Role:</label>
                <input type="text"
                required
                className='border-2 rounded w-full p-2 my-3'
                value={role}
                id='role'
                onChange={ (e) => setRole(e.target.value)}
                 />
            </div>
             <div>
                <label htmlFor="Role " className='font-bold'>Pay:</label>
                <input type="text"
                required
                className='border-2 rounded w-full p-2 my-3'
                id='pay'
                value={pay}
                onChange={(e) => setPay(e.target.value)}
                 />
            </div>
             <div>
                <label htmlFor="Role" className='font-bold'>Location:</label>
                <input type="text"
                className='border-2 rounded w-full p-2 my-3'
                value={location}
                required
                id='location'
                onChange={(e)=>setLocation(e.target.value)}
                 />
            </div>
             <div>
                <label htmlFor="Role" className='font-bold'>Stack:</label>
                <input type="text"
                value={stack}
                required
                className='border-2 rounded w-full p-2 my-3'
                id='stack'
                onChange={(e) => setStack(e.target.value)}
                 />
            </div>
             <div>
                <label htmlFor="Role" className='font-bold'>Details:</label>
                <input type="text"
                value={details}
                id='details'
                required
                className='border-2 rounded w-full p-2 my-3'
                onChange={(e)=>setDetails(e.target.value)}
                 />
            </div>
             <button className='bg-blue-900 w-full text-center p-4 text-white rounded-md mt-4'>Submit</button>
                </div>

            </div>

        </form>
    </div>
  )
}

export default AddJobs