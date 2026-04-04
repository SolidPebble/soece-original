import React, { useEffect, useState } from 'react';
import Navbar from "../Home/Navbar";
import './Faculty.css';

const PLACEHOLDER = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

const Faculty = () => {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE}/api/faculty`)
      .then(res => res.json())
      .then(data => setMentors(data))
      .catch(err => console.log(err));
  }, []);

  const director = mentors.find(m =>
    m.Designation?.toLowerCase().includes("director")
  );

  const hod = mentors.find(m =>
    m.Designation?.toLowerCase().includes("head") &&
    !m.Designation?.toLowerCase().includes("director")
  );

  const professors = mentors.filter(m =>
    m.Designation?.toLowerCase().includes("professor") &&
    !m.Designation?.toLowerCase().includes("head")
  );

  const phd = mentors.filter(m =>
    m.Designation?.toLowerCase().includes("phd")
  );

  const FacultyCard = ({ mentor, large = false }) => (
    <div className={`faculty-card ${large ? "director-card" : ""}`}>
      <div className="faculty-img-container">
        <img
          src={mentor.PhotoURL || PLACEHOLDER}
          alt={mentor.Name}
          onError={(e) => { e.target.src = PLACEHOLDER; }}
        />
      </div>
      <div className="faculty-info">
        <h3>{mentor.Name}</h3>
        <p className="faculty-role">{mentor.Designation}</p>
        <p className="faculty-spec">{mentor.Department}</p>
        {mentor.Qualification && (
          <p className="faculty-spec">{mentor.Qualification}</p>
        )}
        <div className="faculty-contact">
          <span>{mentor.Email}</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="faculty-section">
        <div className="container">
          <h1 className="faculty-title">
            Our <span className="highlight">Mentors</span>
          </h1>

          {/* Director */}
          {director && (
            <div className="director-container">
              <h2 className="designation-title">Director</h2>
              <FacultyCard mentor={director} large={true} />
            </div>
          )}

          {/* Head of Department */}
          {hod && (
            <div className="director-container">
              <h2 className="designation-title">Head of Department</h2>
              <FacultyCard mentor={hod} large={true} />
            </div>
          )}

          {/* Professors */}
          {professors.length > 0 && (
            <div className="designation-section">
              <h2 className="designation-title">Professors</h2>
              <div className="faculty-grid">
                {professors.map((mentor) => (
                  <FacultyCard key={mentor._id} mentor={mentor} />
                ))}
              </div>
            </div>
          )}

          {/* PhD Scholars */}
          {phd.length > 0 && (
            <div className="designation-section">
              <h2 className="designation-title">PhD Scholars</h2>
              <div className="faculty-grid">
                {phd.map((mentor) => (
                  <FacultyCard key={mentor._id} mentor={mentor} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Faculty;