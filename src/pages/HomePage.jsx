import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeCard from "../components/HomeCard";
import JobList from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";
import State from "../components/state";
import Forms from "../components/forms";
const Homepage = () => {
    return (
<div className="m-10">
<Hero title= "The Becoming" sub="Becoming a world Developer"/>
<State/>
<Hero/>
<HomeCard/>
{/* <Header/> */}
<JobList isHome= {true} />
<ViewAllJobs/>
<Forms/>
        </div>
    )
}

export default Homepage;