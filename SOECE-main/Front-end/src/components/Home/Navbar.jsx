// import React from 'react';
// import { Link } from 'react-router-dom'; // 1. Import Link
// import "./Navbar.css";
// import logo from "../../assets/soece-logo.jpeg";

// const Navbar = () => {
//     return (
//         <>
//             <div className="navbar">
//                 <div className="navbar-logo">
//                     {/* Make the logo click back to home too! */}
//                     <Link to="/">
//                         <img src={logo} alt="logo" className="navbar-logo-img" />
//                     </Link>
//                 </div>
//                 <div className="navbar-section">
//                     {/* 2. Replace spans with Links */}
//                     <Link to="/" className="navbar-section-elements">HOME</Link>
//                     <Link to="/about" className="navbar-section-elements">ABOUT</Link>
//                     <Link to="/events" className="navbar-section-elements">EVENTS</Link>
//                     <Link to="/placements" className="navbar-section-elements">PLACEMENTS</Link>
//                     <Link to="/gallery" className="navbar-section-elements">GALLERY</Link>
//                     <Link to="/teams" className="navbar-section-elements">TEAMS</Link>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../../assets/soece-logo.jpeg";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo-link">
                    <img src={logo} alt="logo" className="navbar-logo-img" />
                </Link>
            </div>
            <div className="navbar-section">
                <Link to="/" className="navbar-section-elements">HOME</Link>
                <Link to="/about" className="navbar-section-elements">ABOUT</Link>
                <Link to="/faculty" className="navbar-section-elements">FACULTY</Link>
                <Link to="/events" className="navbar-section-elements">EVENTS</Link>
                <Link to="/placements" className="navbar-section-elements">PLACEMENTS</Link>
                <Link to="/gallery" className="navbar-section-elements">GALLERY</Link>
                <Link to="/teams" className="navbar-section-elements">TEAMS</Link>
            </div>
        </nav>
    );
}

export default Navbar;;