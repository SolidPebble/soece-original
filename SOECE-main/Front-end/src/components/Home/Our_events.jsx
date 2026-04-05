import "./Our_events.css";
import { useState } from "react";

const Our_events = () => {
    const events = [
        {
            id: 1,
            title: "Arduino MasterClass Workshop",
            category: "Workshop",
            date: "19th Feb 2026",
            time: "05:30 pm",
            venue: "SB-3, NITJ",
            host: "So-ECE",
            image: "https://res.cloudinary.com/dgeztehta/image/upload/v1775387480/main-1_twubya.png",
            description: "From zero to hero — a full-day intensive workshop on Arduino programming, sensor interfacing, and building real-world embedded projects.",
            status: "Open",
        },
        {
            id: 5,
            title: "Mind The Mind",
            category: "Competition",
            date: "28th march 2026",
            time: "11:00 AM",
            venue: "Lecture Theatre -404",
            host: "So-ECE",
            image: "https://res.cloudinary.com/dgeztehta/image/upload/v1775387850/main-1_xllfks.png",
            description: "A battle of intellect and logic — push the boundaries of your analytical thinking in this multi-round mind challenge competition.",
            status: "Limited",
        },
        {
            id: 6,
            title: "Smart Electronics Workshop",
            category: "Workshop",
            date: "8th November 2026",
            time: "10:30 AM",
            venue: "E-1, ECE Building",
            host: "SO-ECE",
            image: "https://res.cloudinary.com/dgeztehta/image/upload/v1775388492/main-1_j2vlwk.png",
            description: "Explore the world of smart electronics — from PCB design to IoT-enabled devices, get hands-on experience with cutting-edge components.",
            status: "Open",
        },
    ];

    const categoryColors = {
        Workshop: "#10b981",
        Seminar: "#6366f1",
        Competition: "#f43f5e",
    };

    const [current, setCurrent] = useState(0);
    const [slideKey, setSlideKey] = useState(0);

    const navigate = (index) => {
        setCurrent(index);
        setSlideKey((k) => k + 1);
    };

    const prev = () => navigate((current - 1 + events.length) % events.length);
    const next = () => navigate((current + 1) % events.length);

    const event = events[current];
    const accentColor = categoryColors[event.category] || "#10b981";

    // ... keep existing imports and logic ...

    return (
        <div className="oe-wrapper">
            <h2 className="oe-main-title">Our Events</h2>
            <div className="oe-card">

                <div className="oe-image-container">
                    <img src={event.image} alt={event.title} className="oe-event-img" key={slideKey + "_img"} />
                    <span className="oe-badge" style={{ backgroundColor: accentColor }}>{event.category}</span>
                </div>

                <div className="oe-body" key={slideKey}>
                    <h2 className="oe-title">{event.title}</h2>
                    <p className="oe-description">{event.description}</p>

                    <div className="oe-host-tag">
                        Hosted by: {event.host}
                    </div>

                    <div className="oe-meta-grid">
                        <div className="oe-meta-item">
                            <span className="oe-meta-label">Date</span>
                            <span className="oe-meta-value">{event.date}</span>
                        </div>
                        <div className="oe-meta-item">
                            <span className="oe-meta-label">Venue</span>
                            <span className="oe-meta-value">{event.venue}</span>
                        </div>
                    </div>
                </div>

                <div className="oe-footer">
                    <div className="oe-dots">
                        {events.map((_, i) => (
                            <div key={i} className={`oe-dot${i === current ? " active" : ""}`} />
                        ))}
                    </div>
                    <div className="oe-nav-arrows">
                        <button onClick={prev} className="oe-arrow">❮</button>
                        <button onClick={next} className="oe-arrow">❯</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Our_events;