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
import dev5Img from '../../assets/soece-logo.jpeg';
import dev6Img from '../../assets/soece-logo.jpeg';

const Teams = () => {
    const departments = [
        {
            name: "Digital and Social Media Team",
            members: [
                { name: "Drishti Singla", img: dev4Img, linkedin: "#" },
                { name: "Vivek Yadav", img: dev5Img, linkedin: "#" },
                { name: "Tanu Bhargav", img: dev6Img, linkedin: "#" }
            ]
        },
        {
            name: "Management Team",
            members: [
                { name: "Deepak Kumar", img: memberPlaceholder, linkedin: "#" },
                { name: "Harsh Kumar", img: memberPlaceholder, linkedin: "#" },
                { name: "Suresh Bishnoi", img: memberPlaceholder, linkedin: "#" }
            ]
        },
        {
            name: "Technical Team",
            members: [
                { name: "Irfan Khan", img: memberPlaceholder, linkedin: "#" },
                { name: "Pawan", img: memberPlaceholder, linkedin: "#" },
                { name: "Dushyant", img: memberPlaceholder, linkedin: "#" }
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
                            <h3>Sandeep Chaudhary</h3>
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
                                                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="linkedin-icon">in</a>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Teams;