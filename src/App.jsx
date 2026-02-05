
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from "react-router-dom"
import Homepage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/jobsPage";
import NotFound from "./components/NotFound";
import Slug from "./pages/slug";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<MainLayout/>}>
       <Route index element = {<Homepage/>}/>
       <Route path="/jobs" element= {<JobsPage/>}/>
       <Route path="/jobs/:id" element = {<Slug/>}/>
       <Route path="*" element ={<NotFound/>}/>
    </Route>

  )
);
const App = () =>{

  return <RouterProvider router= {router}/>
};

export default App;