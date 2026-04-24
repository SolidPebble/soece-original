import "./Our_events.css"
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
            host: "Technical Team",
            seats: "50 Seats",
            status: "Open",
        },
        {
            id: 2,
            title: "Silicon Design & VLSI Seminar",
            category: "Seminar",
            date: "28 Oct 2026",
            time: "11:00 AM – 1:00 PM",
            venue: "Seminar Hall - 1",
            host: "Industry Experts",
            seats: "120 Seats",
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
            seats: "Unlimited",
            status: "Open",
        },
        {
            id: 4,
            title: "PCB Design Hands-on Training",
            category: "Workshop",
            date: "12 Nov 2026",
            time: "9:00 AM – 1:00 PM",
            venue: "Electronics Workshop Lab",
            host: "Lab Instructors",
            seats: "30 Seats",
            status: "Invite Only",
        }
    ];

    // Refreshed status colors to match Emerald theme
    const statusColors = {
        Open: "#10b981", // Emerald
        Limited: "#f59e0b", // Amber
        "Invite Only": "#3b82f6", // Blue
    };

    // Refreshed category accent colors
    const categoryColors = {
        Workshop: "#10b981", 
        Seminar: "#6366f1",
        Competition: "#f43f5e",
    };

    const ChevronLeft = () => (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
        </svg>
    );

    const ChevronRight = () => (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
        </svg>
    );

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
    const progressWidth = `${((current + 1) / events.length) * 100}%`;

    return (
        <div className="oe-wrapper">
            <div className="oe-card">

                {/* ── Header ── */}
                <div className="oe-header">
                    <div className="oe-header-left">
                        <span className="oe-eyebrow">SOECE Society</span>
                        <span className="oe-heading">Upcoming Activities</span>
                    </div>
                    <span className="oe-counter-badge">{current + 1} / {events.length}</span>
                </div>

                {/* ── Body ── */}
                <div className="oe-body oe-slide" key={slideKey}>

                    <div className="oe-content-top">
                        <div className="oe-category-row">
                            <div className="oe-category-dot" style={{ background: accentColor }} />
                            <span className="oe-category-label">{event.category}</span>

                            <span style={{
                                marginLeft: "auto",
                                fontSize: "9.5px",
                                fontWeight: 700,
                                letterSpacing: "1px",
                                textTransform: "uppercase",
                                color: statusColors[event.status] || "#10b981",
                                border: `1px solid ${statusColors[event.status] || "#10b981"}44`,
                                borderRadius: "4px",
                                padding: "3px 10px",
                                background: `${statusColors[event.status] || "#10b981"}15`
                            }}>
                                {event.status}
                            </span>
                        </div>

                        <h2 className="oe-title">{event.title}</h2>
                    </div>

                    <div>
                        <div className="oe-divider" />

                        <div className="oe-meta-grid">
                            <div className="oe-meta-item">
                                <span className="oe-meta-label">Date</span>
                                <span className="oe-meta-value accent">{event.date}</span>
                            </div>
                            <div className="oe-meta-item">
                                <span className="oe-meta-label">Time</span>
                                <span className="oe-meta-value">{event.time}</span>
                            </div>
                            <div className="oe-meta-item">
                                <span className="oe-meta-label">Venue</span>
                                <span className="oe-meta-value">{event.venue}</span>
                            </div>
                            <div className="oe-meta-item">
                                <span className="oe-meta-label">Capacity</span>
                                <span className="oe-meta-value">{event.seats}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Progress bar ── */}
                <div className="oe-progress-wrap">
                    <div className="oe-progress-track">
                        <div className="oe-progress-fill" style={{ width: progressWidth, background: accentColor }} />
                    </div>
                </div>

                {/* ── Footer ── */}
                <div className="oe-footer">
                    <div className="oe-dots">
                        {events.map((_, i) => (
                            <button
                                key={i}
                                className={`oe-dot${i === current ? " active" : ""}`}
                                onClick={() => navigate(i)}
                                style={i === current ? { background: accentColor } : {}}
                            />
                        ))}
                    </div>

                    <div className="oe-nav">
                        <button className="oe-nav-btn" onClick={prev}><ChevronLeft /></button>
                        <button className="oe-nav-btn" onClick={next}><ChevronRight /></button>
                    </div>
                </div>

                {/* ── CTA row ── */}
                <div className="oe-cta-row">
                    <button className="oe-cta-primary" style={{ background: accentColor }}>Register Now</button>
                    <button className="oe-cta-secondary">Add to Calendar</button>
                </div>

            </div>
        </div>
    );
}

export default Our_events;