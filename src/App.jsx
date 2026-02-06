import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from "react-router-dom"
import Homepage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/jobsPage";
import NotFound from "./components/NotFound";
import AddJobs from "./pages/AddJobs" ;
import Slug from "./pages/slug";
const addJob = async (newJob) =>{
const res = await fetch ("/api/jobs", {
  method: "POST",
  headers:{
    'content-Type' : 'application/json'
  },
  body: JSON.stringify(newJob)
});
return;
  // console.log(newJob);
}

const deleteJob = async (deleteJob) => {
  console.log(deleteJob)
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<MainLayout/>}>
       <Route index element = {<Homepage/>}/>
       <Route path="/jobs" element= {<JobsPage/>}/>
       <Route path="/jobs/:id" element = {<Slug deleteJob={deleteJob}/>}/>
       <Route path="/add-jobs" element = {<AddJobs addJobSubmit={addJob}/>} />
       <Route path="*" element ={<NotFound/>}/>
    </Route>

  )
);
const App = () =>{

  return <RouterProvider router= {router}/>
};

export default App;