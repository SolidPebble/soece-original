import React from "react";
import Navbar from "./Navbar";
import Intro_page from "./Intro_page";
import Description_page from "./Description_page";
import Faculty_page from "./Faculty_page";
import Our_events from "./Our_events";
import Follow_us from "./Follow_us";
import Footer from "./Footer";
import CircuitBackground from "./CircuitBackground";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero-section" id="home">
        <div className="hero-bg">
          <CircuitBackground useWindowSize={false} />
        </div>

        <div className="home-overlay"></div>

        <Navbar />

        <div className="intro-container">
          <Intro_page />
        </div>
      </section>

      <main className="main-content">
        <Description_page />
        <Faculty_page />
        <Our_events />
        <Follow_us />
        <Footer />
      </main>
    </>
  );
};

export default Home;