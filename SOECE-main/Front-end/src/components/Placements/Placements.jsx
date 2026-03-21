import React, { useState } from 'react';
import Navbar from "../Home/Navbar";
import './Placements.css';

// 1. IMPORT YOUR IMAGE HERE
import bgImage from '../../assets/your-background-image.jpg';

const Placements = () => {
    const [activeYear, setActiveYear] = useState('2025');

    const placementData = {
        "2025": [
            { id: 1, name: "Aarav Sharma", company: "Google", role: "SDE", img: "https://via.placeholder.com/150" },
            { id: 2, name: "Isha Gupta", company: "Microsoft", role: "Software Engineer", img: "https://via.placeholder.com/150" },
            { id: 3, name: "Rohan Verma", company: "Amazon", role: "Cloud Analyst", img: "https://via.placeholder.com/150" },
            { id: 4, name: "Sanya Malhotra", company: "Adobe", role: "Product Intern", img: "https://via.placeholder.com/150" },
            { id: 5, name: "Vikram Singh", company: "Zomato", role: "Backend Dev", img: "https://via.placeholder.com/150" },
        ],
        "2024": [
            { id: 6, name: "Karan Johar", company: "Meta", role: "Data Scientist", img: "https://via.placeholder.com/150" },
            { id: 7, name: "Meera Das", company: "Netflix", role: "UI/UX Designer", img: "https://via.placeholder.com/150" },
            { id: 8, name: "Arjun Kapoor", company: "Apple", role: "Hardware Engineer", img: "https://via.placeholder.com/150" },
            { id: 9, name: "Priya Rai", company: "Uber", role: "Frontend Lead", img: "https://via.placeholder.com/150" },
            { id: 10, name: "Sahil Khan", company: "Intel", role: "Embedded Dev", img: "https://via.placeholder.com/150" },
        ],
        "2023": [
            { id: 11, name: "Ananya Panday", company: "Samsung", role: "System Engineer", img: "https://via.placeholder.com/150" },
            { id: 12, name: "Kabir Singh", company: "Oracle", role: "Database Admin", img: "https://via.placeholder.com/150" },
            { id: 13, name: "Tina Dabi", company: "TCS", role: "Project Manager", img: "https://via.placeholder.com/150" },
            { id: 14, name: "Varun Dhawan", company: "Infosys", role: "Consultant", img: "https://via.placeholder.com/150" },
            { id: 15, name: "Sara Ali", company: "Qualcomm", role: "VLSI Engineer", img: "https://via.placeholder.com/150" },
        ]
    };

    return (
        <>
            <Navbar />
            {/* 2. APPLY THE IMAGE USING INLINE STYLE */}
            <div
                className="placements-container"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed'
                }}
            >
                <div className="placements-overlay">
                    <h1 className="placements-title">Placement Records</h1>

                    <div className="year-tabs">
                        {Object.keys(placementData).reverse().map(year => (
                            <button
                                key={year}
                                className={activeYear === year ? 'tab active' : 'tab'}
                                onClick={() => setActiveYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <div className="student-grid">
                        {placementData[activeYear].map(student => (
                            <div key={student.id} className="student-card">
                                <div className="image-wrapper">
                                    <img src={student.img} alt={student.name} />
                                </div>
                                <h3>{student.name}</h3>
                                <p className="company">{student.company}</p>
                                <p className="role">{student.role}</p>
                            </div>
                        ))}
                    </div>

                    <div className="stats-footer">
                        <p>For more detailed placement statistics, <a href="https://ctp.nitj.ac.in/sdashboard/home" target="_blank" rel="noreferrer">go here →</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Placements;