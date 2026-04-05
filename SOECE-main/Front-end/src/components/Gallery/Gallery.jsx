import React, { useState, useEffect } from 'react';
import Navbar from "../Home/Navbar";
import './Gallery.css';

const Gallery = () => {
    const [filter, setFilter] = useState('All');
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

    const categories = ['All', ...Array.from(new Set(galleryData.map(item => item.category)))];

    const filteredImages = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.category === filter);

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

                    <div className="filter-container">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                                onClick={() => setFilter(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="gallery-grid">
                        {filteredImages.map((item) => (
                            <div key={item._id} className="gallery-item">
                                <img src={item.img} alt={item.title} className="gallery-img" />
                                <div className="gallery-overlay">
                                    <span className="item-cat">{item.category}</span>
                                    <h3 className="item-title">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredImages.length === 0 && (
                        <p style={{ textAlign: 'center', color: '#aaa', marginTop: '40px' }}>
                            No images found for this category
                        </p>
                    )}
                </div>
            </section>
        </>
    );
};

export default Gallery;