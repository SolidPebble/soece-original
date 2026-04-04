import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/soece-logo.jpeg";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <Link to="/" className="logo-link" onClick={closeMenu}>
                <img src={logo} alt="logo" className="navbar-logo-img" />
            </Link>

            {/* Hamburger button — only shows on mobile */}
            <button
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Nav links */}
            <div className={`navbar-section ${menuOpen ? "active" : ""}`}>
                <Link to="/" className="navbar-section-elements" onClick={closeMenu}>HOME</Link>
                <Link to="/about" className="navbar-section-elements" onClick={closeMenu}>ABOUT</Link>
                <Link to="/faculty" className="navbar-section-elements" onClick={closeMenu}>FACULTY</Link>
                <Link to="/events" className="navbar-section-elements" onClick={closeMenu}>EVENTS</Link>
                <Link to="/placements" className="navbar-section-elements" onClick={closeMenu}>PLACEMENTS</Link>
                <Link to="/gallery" className="navbar-section-elements" onClick={closeMenu}>GALLERY</Link>
                <Link to="/teams" className="navbar-section-elements" onClick={closeMenu}>TEAMS</Link>
            </div>
        </nav>
    );
}

export default Navbar;