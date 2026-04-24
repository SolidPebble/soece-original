import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <img src="/logo.jpeg" alt="SOECE Logo" />
        </div>

        <ul className="navbar-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT</a></li>
          <li><a href="/faculty">FACULTY</a></li>
          <li><a href="/events">EVENTS</a></li>
          <li><a href="/placements">PLACEMENTS</a></li>
          <li><a href="/gallery">GALLERY</a></li>
          <li><a href="/teams">TEAMS</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;