import Navbar from "./Navbar";
import Intro_page from "./Intro_page";
import Description_page from "./Description_page";
import Faculty_page from "./Faculty_page";
import Our_events from "./Our_events";
import Follow_us from "./Follow_us";
import About_ending from "../About/About_ending";
import Event_academic_calendar from "./Event_academic_calendar";
import Notice from "./Notice";
import "./Home.css";

const calendarEvents = [
  {
    day: "15",
    month: "Apr",
    type: "Exam",
    title: "Mid-Term Examination",
    description: "Syllabus covers units 1 to 3 for all ECE core subjects."
  },
  {
    day: "22",
    month: "Apr",
    type: "Workshop",
    title: "VLSI Design Seminar",
    description: "Expert talk on industrial trends in chip design."
  },
  {
    day: "01",
    month: "May",
    type: "Holiday",
    title: "Labour Day",
    description: "Institute will remain closed."
  }
];

const notices = [
  {
    title: "Arduino Master Class",
    category: "Workshop",
    venue: "SB-3, ECE Building",
    date: "19 Feb 2026",
    time: "05:30 PM",
    isLive: false
  },
  {
    title: "Mind the Mind",
    category: "Competition",
    venue: "LT 404",
    date: "28 March 2026",
    time: "11:00 AM",
    isLive: true
  },
  {
    title: "Cricket Tournament",
    category: "Sports",
    venue: "NITJ Main Ground",
    date: "21-22 March 2026",
    time: "09:00 AM",
    isLive: false
  }
];

const Home = () => {
  return <>
    <Navbar />
    <Intro_page />
    <Notice notices={notices} />   
    <Description_page />
    <Faculty_page />
    <Our_events />
    <Event_academic_calendar events={calendarEvents} />
    <Follow_us />
    <About_ending />
  </>
}

export default Home;