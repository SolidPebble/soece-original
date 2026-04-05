import React, { useState, useEffect } from 'react';
import Navbar from "../Home/Navbar";
import './Placements.css';

const PLACEHOLDER = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const Placements = () => {
    const [activeYear, setActiveYear] = useState('');
    const [placements, setPlacements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE}/api/placements`)
            .then(res => res.json())
            .then(data => {
                setPlacements(data);
                // auto select the latest year
                const years = [...new Set(data.map(p => p.year))].sort((a, b) => b - a);
                if (years.length > 0) setActiveYear(years[0]);
                setLoading(false);
            })
            .catch(err => {
                console.error('Placements error:', err);
                setLoading(false);
            });
    }, []);

    // get unique years sorted latest first
    const years = [...new Set(placements.map(p => p.year))].sort((a, b) => b - a);

    // filter by active year
    const filtered = placements.filter(p => p.year === activeYear);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="placements-container">
                    <div className="placements-overlay">
                        <h1 className="placements-title">Placement Records</h1>
                        <p style={{ textAlign: 'center', color: '#aaa' }}>Loading...</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <div className="placements-container">
                <div className="placements-overlay">
                    <h1 className="placements-title">Placement Records</h1>

                    {/* Year tabs — built dynamically from DB */}
                    <div className="year-tabs">
                        {years.map(year => (
                            <button
                                key={year}
                                className={activeYear === year ? 'tab active' : 'tab'}
                                onClick={() => setActiveYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    {/* Student grid */}
                    <div className="student-grid">
                        {filtered.map(student => (
                            <div key={student._id} className="student-card">
                                <div className="image-wrapper">
                                    <img
                                        src={student.img || PLACEHOLDER}
                                        alt={student.name}
                                        onError={(e) => { e.target.src = PLACEHOLDER; }}
                                    />
                                </div>
                                <h3>{student.name}</h3>
                                <p className="company">{student.company}</p>
                                <p className="role">{student.role}</p>
                            </div>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p style={{ textAlign: 'center', color: '#aaa', marginTop: '40px' }}>
                            No placement data for this year
                        </p>
                    )}

                    <div className="stats-footer">
                        <p>For more detailed placement statistics, <a href="https://ctp.nitj.ac.in/sdashboard/home" target="_blank" rel="noreferrer">go here →</a></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Placements;