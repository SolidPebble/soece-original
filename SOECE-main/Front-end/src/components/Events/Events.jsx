import "./Events.css"
import Navbar from "../Home/Navbar";
import { useState, useEffect } from "react";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [activeTag, setActiveTag] = useState("All");
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
    const [loading, setLoading] = useState(true);

    // Fetch from your MongoDB backend
    useEffect(() => {
        fetch('/api/events')
            .then(res => res.json())
            .then(data => {
                setEvents(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Backend error:', err);
                setLoading(false);
            });
    }, []);

    const allTags = ["All", ...Array.from(new Set(events.map((e) => e.tag)))];

    if (loading) {
        return (
            <>
                <Navbar />
                <div className="ep-page">
                    <div className="ep-empty">
                        <div className="ep-empty-icon">⏳</div>
                        <div className="ep-empty-text">Loading SOECE events...</div>
                    </div>
                </div>
            </>
        );
    }

    const filtered = activeTag === "All"
        ? events
        : events.filter((e) => e.tag === activeTag);

    const openModal = (event) => {
        setSelectedEvent(event);
        setSelectedGalleryIdx(0);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedEvent(null);
        document.body.style.overflow = "";
    };

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) closeModal();
    };

    const activeMedia = selectedEvent
        ? selectedEvent.gallery?.[selectedGalleryIdx] ?? selectedEvent.media
        : null;

    return <>
        <Navbar />
        <div className="ep-page">
            {/* ── Hero header ── */}
            <div className="ep-hero">
                <span className="ep-eyebrow">SOECE · NIT Jalandhar</span>
                <h1 className="ep-page-title">Our Events</h1>
                <p className="ep-page-subtitle">
                    Workshops, seminars, hackathons & more from the ECE department community
                </p>
            </div>

            {/* ── Filter tabs ── */}
            <div className="ep-filters">
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        className={`ep-filter-btn${activeTag === tag ? " active" : ""}`}
                        onClick={() => setActiveTag(tag)}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* ── Events grid ── */}
            {filtered.length === 0 ? (
                <div className="ep-empty">
                    <div className="ep-empty-icon">📭</div>
                    <div className="ep-empty-text">No events found for this category</div>
                </div>
            ) : (
                <div className="ep-grid">
                    {filtered.map((event, i) => (
                        <div
                            key={event.id || event._id}
                            className="ep-card"
                            style={{ animationDelay: `${i * 60}ms` }}
                            onClick={() => openModal(event)}
                        >
                            {/* Thumbnail */}
                            {event.media ? (
                                <img src={event.media} alt={event.title} className="ep-card-thumb" />
                            ) : (
                                <div className="ep-card-thumb-placeholder">
                                    {event.tag?.slice(0, 3).toUpperCase()}
                                </div>
                            )}

                            {/* Body */}
                            <div className="ep-card-body">
                                <div className="ep-card-meta-row">
                                    <span className="ep-card-tag">{event.tag}</span>
                                    <span className="ep-card-date">{event.date}</span>
                                </div>
                                <h3 className="ep-card-title">{event.title}</h3>
                                <p className="ep-card-desc">{event.description}</p>

                                <div className="ep-card-footer">
                                    <span className="ep-card-attendees">👥 {event.attendees}</span>
                                    <span className="ep-card-cta">
                                        View Details 
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ── Modal ── */}
            {selectedEvent && (
                <div className="ep-modal-overlay" onClick={handleOverlayClick}>
                    <div className="ep-modal">
                        {/* Hero media */}
                        {activeMedia ? (
                            <img src={activeMedia} alt={selectedEvent.title} className="ep-modal-media" />
                        ) : (
                            <div className="ep-modal-media-placeholder">
                                {selectedEvent.tag?.slice(0, 3).toUpperCase()}
                            </div>
                        )}

                        {/* Gallery strip */}
                        {selectedEvent.gallery && selectedEvent.gallery.length > 1 && (
                            <div className="ep-modal-gallery">
                                {selectedEvent.gallery.map((img, idx) =>
                                    img ? (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`Gallery ${idx + 1}`}
                                            className={`ep-modal-gallery-thumb${selectedGalleryIdx === idx ? " selected" : ""}`}
                                            onClick={() => setSelectedGalleryIdx(idx)}
                                        />
                                    ) : (
                                        <div
                                            key={idx}
                                            className={`ep-modal-gallery-thumb${selectedGalleryIdx === idx ? " selected" : ""}`}
                                            style={{ background: "#1a2744", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "10px", color: "#4a5a72", cursor: "pointer" }}
                                            onClick={() => setSelectedGalleryIdx(idx)}
                                        >
                                            {idx + 1}
                                        </div>
                                    )
                                )}
                            </div>
                        )}

                        {/* Content */}
                        <div className="ep-modal-content">
                            {/* Top: tag, title, close */}
                            <div className="ep-modal-top">
                                <div>
                                    <span className="ep-modal-tag">{selectedEvent.tag}</span>
                                    <h2 className="ep-modal-title">{selectedEvent.title}</h2>
                                </div>
                                <button className="ep-modal-close" onClick={closeModal} aria-label="Close">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                            </div>

                            {/* Meta pills */}
                            <div className="ep-modal-meta">
                                <div className="ep-modal-meta-pill">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    {selectedEvent.date}
                                </div>
                                <div className="ep-modal-meta-pill">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {selectedEvent.location}
                                </div>
                                <div className="ep-modal-meta-pill">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                        <circle cx="9" cy="7" r="4" />
                                    </svg>
                                    {selectedEvent.attendees}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="ep-modal-desc-label">About this Event</div>
                            <p className="ep-modal-desc">{selectedEvent.description}</p>

                            <div className="ep-modal-divider" />

                            {/* Highlights */}
                            <div className="ep-modal-desc-label">Event Highlights</div>
                            <div className="ep-modal-highlights">
                                {selectedEvent.highlights.map((h, i) => (
                                    <div key={i} className="ep-modal-highlight">
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {h}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
}

export default Events;
