import React from 'react';
import "./About_ending.css";
const handleSoon = (e) => {
    e.preventDefault();
    alert("🚀 Coming Soon! Stay tuned.");
};

const About_ending = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <h2 className="footer-title">About Us</h2>
                
                <p className="footer-desc">
                    Society of Electronics and Communication Engineers <strong>(SoECE)</strong>
                    <br />
                    A society which was established in the department of Electronics and Communication Engineering (ECE) NIT Jalandhar
                </p>

                <div className="footer-socials">
                    <a href="#" className="social-link" onClick={handleSoon}>Twitter</a>
                    <a href="https://instagram.com/soece_nitj" target="_blank" rel="noreferrer" className="social-link">Instagram</a>
                    <a href="#" className="social-link" onClick={handleSoon}>LinkedIn</a>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us – Dr. Indu Saini</h3>
                    <p>Email Id: <a href="mailto:soece@nitj.ac.in">soece@nitj.ac.in</a></p>
                </div>

                <div className="footer-copyright">
                    <p>Copyright © 2026 | All rights reserved, SOECE NIT Jalandhar – 144011</p>
                </div>
            </div>
        </footer>
    );
}

export default About_ending;