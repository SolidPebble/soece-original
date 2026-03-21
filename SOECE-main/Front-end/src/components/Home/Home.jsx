import Navbar from "./Navbar";
import Intro_page from "./Intro_page";
import Description_page from "./Description_page";
import Faculty_page from "./Faculty_page";
import Upcoming_events from "./Upcoming_events";
import Our_events from "./Our_events";
import Follow_us from "./Follow_us";
import About_ending from "../About/About_ending"
import "./Home.css"

const Home = () => {
  return <>
    <Navbar />
    <Intro_page />
    <Description_page />
    <Faculty_page />
    <Upcoming_events />
    <Our_events />
    <Follow_us />
    <About_ending />
  </>
}

export default Home;