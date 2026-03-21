import "./Upcoming_events.css";
import { useState } from "react";

const events = [
  {
    id: 1,
    title: "Workshop on Arduino & Embedded Systems",
    day: "12",
    month: "Oct",
    year: "2026",
    time: "10:00 AM – 2:00 PM",
    location: "VLSI Lab, NIT Jalandhar",
    category: "Workshop",
    color: "#10b981",
  },
  {
    id: 2,
    title: "National Level Robotics Competition",
    day: "25",
    month: "Oct",
    year: "2026",
    time: "9:00 AM – 5:00 PM",
    location: "Main Auditorium",
    category: "Competition",
    color: "#a31611",
  },
  {
    id: 3,
    title: "Guest Lecture: Future of 6G Technology",
    day: "05",
    month: "Nov",
    year: "2026",
    time: "11:30 AM – 1:30 PM",
    location: "Seminar Hall 1",
    category: "Expert Lecture",
    color: "#3b82f6",
  }
];

const ClockIcon = () => (
  <svg className="uec-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const PinIcon = () => (
  <svg className="uec-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function Upcoming_events() {
  const [current, setCurrent] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const navigate = (index) => {
    setCurrent(index);
    setSlideKey((k) => k + 1);
  };

  const prev = () => navigate((current - 1 + events.length) % events.length);
  const next = () => navigate((current + 1) % events.length);

  const event = events[current];

  return (
    <div className="uec-wrapper">
      <div className="uec-card">

        {/* Top bar */}
        <div className="uec-topbar">
          <span className="uec-section-label">Upcoming Events</span>
          <span className="uec-counter">{current + 1} / {events.length}</span>
        </div>

        {/* Body */}
        <div className="uec-body uec-slide" key={slideKey}>
          <div className="uec-date-col">
            <span className="uec-date-day" style={{ color: event.color }}>{event.day}</span>
            <span className="uec-date-month">{event.month}</span>
            <span className="uec-date-year">{event.year}</span>
          </div>

          <div className="uec-details">
            <div>
              <span className="uec-category" style={{ color: event.color, borderColor: event.color }}>
                {event.category}
              </span>
              <h2 className="uec-title">{event.title}</h2>
            </div>

            <div className="uec-meta">
              <div className="uec-meta-row"><ClockIcon /><span className="uec-meta-text">{event.time}</span></div>
              <div className="uec-meta-row"><PinIcon /><span className="uec-meta-text">{event.location}</span></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="uec-footer">
          <div className="uec-dots">
            {events.map((_, i) => (
              <button
                key={i}
                className={`uec-dot${i === current ? " active" : ""}`}
                style={i === current ? { background: event.color } : {}}
                onClick={() => navigate(i)}
              />
            ))}
          </div>

          <div className="uec-nav">
            <button className="uec-nav-btn" onClick={prev}><ChevronLeft /></button>
            <button className="uec-nav-btn" onClick={next}><ChevronRight /></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Upcoming_events;