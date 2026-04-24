import React, { useState, useEffect } from 'react';
import Navbar from "../Home/Navbar";
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
                <Navbar />
                <section className="gallery-section">
                    <div className="gallery-container">
                        <h1 className="gallery-title">Our <span className="highlight">Memories</span></h1>
                        <p style={{ textAlign: 'center', color: '#aaa' }}>Loading gallery...</p>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <section className="gallery-section">
                <div className="gallery-container">
                    <h1 className="gallery-title">Our <span className="highlight">Memories</span></h1>

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