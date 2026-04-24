import "./About.css";
import Navbar from "../Home/Navbar";
import About_us from "./About_us";
import Description_page from "../Home/Description_page";
import Mission from "./Mission";
import About_ending from "./About_ending";
import CircuitBackground from "../Home/CircuitBackground";
import Footer from "./Footer";  

const About = () => {
  return (
    <>
      {/* Hero wrapper: circuit lives here, navbar + about card sit on top */}
      <div className="about-hero-wrapper">
        <CircuitBackground useWindowSize={true} />
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <Navbar />
          <About_us />
        </div>
      </div>

      {/* Rest of the page unchanged */}
      <Description_page />
      <Mission />
      <Footer />
    </>
  );
};

export default About;