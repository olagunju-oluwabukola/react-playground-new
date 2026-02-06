import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinners from '../components/spinners'
const Slug = () => {
    const {id} = useParams()
    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchJobs = async () =>{
            try{
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setJob(data);
            } catch (error){
                console.log(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchJobs();
    }, [id])
  return loading ? <Spinners/> : (<h1>{job?.role}</h1>)
}

export default Slug