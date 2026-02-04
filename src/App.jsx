import Hero from "./components/Hero";
import HomeCard from "./components/HomeCard";
import JobList from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () =>{
  // const names = ["moni", "lade", "Arom"]
  // const isLoggedIn = true
  return (
<>
<div className="m-10">
<Hero title= "The Becoming" sub="Becoming a world Developer"/>
<Hero/>
<HomeCard/>
<JobList/>
<ViewAllJobs/>
</div>
{/* <ul>
  {names.map((e,i)=>(
  <li key={i} style={{}}>{i} {e}</li>
  ))}
</ul>
<div>{isLoggedIn ? <h1>Hey User</h1> : <h1>Please log in</h1>}</div> */}

</>

  )
}

export default App;