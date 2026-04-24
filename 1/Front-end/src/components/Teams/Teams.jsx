import React from 'react';
import Navbar from "../Home/Navbar";
import './Teams.css';

// --- Imports ---
import presidentImg from '../../assets/president.jpeg';
import secretaryImg from '../../assets/secretary.jpeg';
import coord1Img from '../../assets/coordinator1.jpeg';
import coord2Img from '../../assets/coordinator2.jpeg';
import memberPlaceholder from '../../assets/soece-logo.jpeg';

// Import individual images for Developer Team
import dev1Img from '../../assets/coordinator1.jpeg';
import dev2Img from '../../assets/rudransh.jpeg';
import dev3Img from '../../assets/shivam.jpeg';
import dev4Img from '../../assets/drishti.jpeg';
import dev5Img from '../../assets/tanu.jpeg';
import dev6Img from '../../assets/suresh.jpeg';
import dev7Img from '../../assets/harsh.jpeg';
import dev8Img from '../../assets/deepak_soece.jpeg';
import dev9Img from '../../assets/irfan_image.jpeg';
import dev10Img from '../../assets/deepika_soece.jpeg';
import dev11Img from '../../assets/pawan.jpeg';
import dev12Img from '../../assets/vivek.jpeg';

const Teams = () => {
    const departments = [
        {
            name: "Digital and Social Media Team",
            members: [
                { name: "Drishti Singla", img: dev4Img, linkedin: "#" },
                { name: "Tanu Bhargav", img: dev5Img, linkedin: "#" },
                { name: "Vivek Yadav", img: dev12Img, linkedin: "#" }
            ]
        },
        {
            name: "Management Team",
            members: [
                { name: "Deepak Kumar", img: dev8Img, linkedin: "#" },
                { name: "Harsh Kumar", img: dev7Img, linkedin: "#" },
                { name: "Suresh Bishnoi", img: dev6Img , linkedin: "#" }
            ]
        },
        {
            name: "Technical Team",
            members: [
                { name: "Irfan Khan", img: dev9Img, linkedin: "#" },
                { name: "Deepika", img: dev10Img, linkedin: "#" },
                { name: "Pawan", img: dev11Img, linkedin: "#" }
            ]
        },
        {
            name: "Our Developer Team",
            members: [
                { name: "Hardik Agarwal", img: dev1Img, linkedin: "https://www.linkedin.com/in/hardik-agarwal-a2a651306" },
                { name: "Rudransh Dhiman", img: dev2Img, linkedin: "https://www.linkedin.com/in/rudhranshdhiman" },
                { name: "Shivam", img: dev3Img, linkedin: "https://www.linkedin.com/in/shivam-pokhriyal-4a8ab63b3/" }
            ]
        }
    ];

    return (
        <> 
            <Navbar />
            <div className="teams-section">
                <div className="container">
                    <h1 className="teams-title">Our Society Team</h1>

                    {/* --- LEADERSHIP SECTION --- */}
                    <div className="tier president-tier">
                        <div className="member-card highlight">
                            <div className="member-photo-container">
                                <img src={presidentImg} alt="Sandeep Chaudhary" className="member-photo" />
                            </div>
                            <h3>Sandeep Choudhary</h3>
                            <p className="member-role">President</p>
                        </div>
                    </div>

                    <div className="tier secretary-tier">
                        <div className="member-card">
                            <div className="member-photo-container">
                                <img src={secretaryImg} alt="Secretary" className="member-photo" />
                            </div>
                            <h3>Kapil Singh</h3>
                            <p className="member-role">Secretary</p>
                        </div>
                    </div>

                    <div className="tier coordinator-tier">
                        <div className="member-card">
                            <div className="member-photo-container">
                                <img src={coord1Img} alt="Hardik Agarwal" className="member-photo" />
                            </div>
                            <h3>Hardik Agarwal</h3>
                            <p className="member-role">Coordinator</p>
                        </div>
                        <div className="member-card">
                            <div className="member-photo-container">
                                <img src={coord2Img} alt="Hargun Singh" className="member-photo" />
                            </div>
                            <h3>Hargun Singh</h3>
                            <p className="member-role">Coordinator</p>
                        </div>
                    </div>

                    {/* --- DEPARTMENT CIRCLE SECTION --- */}
                    <div className="functional-teams">
                        {departments.map((dept, index) => (
                            <div key={index} className="dept-container">
                                <h2 className="dept-title-new">{dept.name}</h2>
                                <div className="member-circle-grid">
                                    {dept.members.map((member, mIndex) => (
                                        <div key={mIndex} className="member-circle-wrapper">
                                            <div className="circle-image-container">
                                                <img src={member.img} alt={member.name} className="circle-photo" />
                                                <div className="member-overlay">
                                                    {dept.name === "Our Developer Team" && (
                                                        <a href={member.linkedin} target="_blank" rel="noreferrer" className="linkedin-icon">in</a>
                                                    )}
                                                    <p className="hover-name">{member.name}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- TEAM PAGE FOOTER --- */}
                    <div className="team-footer">
                        <p>Developed with ❤️ by the <span className="dev-team-highlight">Developer Team</span></p>
                        <p className="footer-contact">If you have any website issues or inquiries, please contact us via email at: <a href="mailto:hardika.ec.24@nitj.ac.in" className="footer-email">hardika.ec.24@nitj.ac.in</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Teams;