import "./Our_events.css";
import { useState } from "react";

const Our_events = () => {
    const events = [
        {
            id: 1,
            title: "Embedded Systems & IoT BootCamp",
            category: "Workshop",
            date: "15 Oct 2026",
            time: "10:00 AM – 4:00 PM",
            venue: "Innovation Lab, NITJ",
            host: "Dr. Satish Kumar",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&q=80&w=800",
            description: "A comprehensive hands-on workshop covering Arduino, ESP32, and cloud integration for real-world IoT solutions.",
            status: "Open",
        },
        {
            id: 2,
            title: "Silicon Design & VLSI Seminar",
            category: "Seminar",
            date: "28 Oct 2026",
            time: "11:00 AM – 1:00 PM",
            venue: "Seminar Hall - 1",
            host: "Anmol Sharma",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
            description: "Industry expert Anmol Sharma, an NIT Jalandhar Alumni, shares insights on modern VLSI design and career paths.",
            status: "Limited",
        },
        {
            id: 3,
            title: "Electro-Quiz: Circuit Mastery",
            category: "Competition",
            date: "05 Nov 2026",
            time: "2:00 PM – 5:00 PM",
            venue: "Digital Classroom 2",
            host: "Events Committee",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
            description: "Test your speed and accuracy in circuit debugging and theoretical electronic concepts in this high-stakes quiz.",
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