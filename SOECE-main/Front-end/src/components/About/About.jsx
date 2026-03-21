import "./About.css"
import Navbar from "../Home/Navbar";
import About_us from "./About_us";
import Description_page from "../Home/Description_page";
import Mission from "./Mission";
import About_ending from "./About_ending";

const About = () => {
    return <>
        <Navbar />
        <About_us />
        <Description_page />
        <Mission />
        <About_ending />
    </>

}

export default About;