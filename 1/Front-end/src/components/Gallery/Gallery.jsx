import React, { useState, useEffect } from 'react';
import Navbar from "../Home/Navbar";
import CircuitBackground from "../Home/CircuitBackground";
import './Gallery.css';

const Gallery = () => {
    const [galleryData, setGalleryData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE}/api/gallery`)
            .then(res => res.json())
            .then(data => {
                setGalleryData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Gallery error:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <>
                <div className="gl-hero-wrapper">
                    <CircuitBackground useWindowSize={true} />
                    <div className="gl-hero-overlay"></div>
                    <div className="gl-hero-content">
                        <Navbar />
                    </div>
                </div>
                <section className="gallery-section">
                    <div className="gallery-container">
                        <p style={{ textAlign: 'center', color: '#aaa' }}>Loading gallery...</p>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            {/* ── Circuit hero ── */}
            <div className="gl-hero-wrapper">
                <CircuitBackground useWindowSize={true} />
                <div className="gl-hero-overlay"></div>
                <div className="gl-hero-content">
                    <Navbar />
                    <div className="gl-hero">
                        <div className="gl-title-card">
                            <h1 className="gl-title">
                                Our <span className="gl-highlight">Memories</span>
                            </h1>
                            <div className="gl-title-line"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Rest of page ── */}
            <section className="gallery-section">
                <div className="gallery-container">

                    <div className="gallery-grid">
                        {galleryData.map((item) => (
                            <div key={item._id} className="gallery-item">
                                <img src={item.img} alt={item.title} className="gallery-img" />
                                <div className="gallery-overlay">
                                    <h3 className="item-title">{item.title}</h3>
                                    {item.subtitle && (
                                        <p className="item-subtitle">{item.subtitle}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {galleryData.length === 0 && (
                        <p style={{ textAlign: 'center', color: '#aaa', marginTop: '40px' }}>
                            No photos yet
                        </p>
                    )}

                </div>
            </section>
        </>
    );
};

export default Gallery;