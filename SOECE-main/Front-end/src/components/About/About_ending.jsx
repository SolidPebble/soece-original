import React from 'react';
import "./About_ending.css";

const About_ending = () => {
    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                <h2 className="footer-title">About Us</h2>
                
                <p className="footer-desc">
                    Society of Electronics and Communication Engineers <strong>(SOECE)</strong>
                    <br />
                    A society which was established in the department of Electronics and Communication Engineering (ECE) NIT Jalandhar
                </p>

                <div className="footer-socials">
                    {/* You can replace these with <img> tags for your icons */}
                    <a href="#" className="social-link">Twitter</a>
                    <a href="#" className="social-link">Instagram</a>
                    <a href="#" className="social-link">LinkedIn</a>
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