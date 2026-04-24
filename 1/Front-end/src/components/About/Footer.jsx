import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* ── About Us ── */}
      <div className="footer-about">
        <h2 className="footer-title">About Us</h2>
        <p className="footer-sub">
          Society of Electronics and Communication Engineers <strong>(SoECE)</strong>
        </p>
        <p className="footer-sub">
          A society which was established in the department of Electronics and
          Communication Engineering (ECE) NIT Jalandhar
        </p>
      </div>

      {/* ── Divider ── */}
      <hr className="footer-divider" />

      {/* ── Contact Us ── */}
      <div className="footer-contact">
        <h3 className="footer-contact-title">Contact Us</h3>
        <div className="footer-coordinators">

          <div className="coordinator-card">
            <span className="coordinator-role">FACULTY COORDINATOR</span>
            <span className="coordinator-name">Dr. Indu Saini</span>
            <a href="mailto:sainii@nitj.ac.in" className="coordinator-link">
              sainii@nitj.ac.in
            </a>
          </div>

          <div className="coordinator-card">
            <span className="coordinator-role">STUDENT COORDINATOR</span>
            <span className="coordinator-name">Hardik Agarwal</span>
            <a href="tel:+918769494606" className="coordinator-link">
              +91 8769494606
            </a>
          </div>

        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="footer-bottom">
        <p>Copyright © 2026 | All rights reserved, SoECE NIT Jalandhar – 144011</p>
      </div>

    </footer>
  );
};

export default Footer;