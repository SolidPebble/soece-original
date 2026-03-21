import React, { useState } from 'react';
import Navbar from "../Home/Navbar";
import './Gallery.css';

// Importing 6 unique images from assets
import dev1Img from '../../assets/soece-logo.jpeg';
import dev2Img from '../../assets/soece-logo.jpeg';
import dev3Img from '../../assets/soece-logo.jpeg';
import dev4Img from '../../assets/soece-logo.jpeg';
import dev5Img from '../../assets/soece-logo.jpeg';
import dev6Img from '../../assets/soece-logo.jpeg';

const Gallery = () => {
    const [filter, setFilter] = useState('All');

    const galleryData = [
        {
            id: 1,
            category: 'Techfest',
            title: 'Inauguration Ceremony',
            img: dev1Img
        },
        {
            id: 2,
            category: 'Techfest',
            title: 'Project Exhibition',
            img: dev2Img
        },
        {
            id: 3,
            category: 'Workshops',
            title: 'Arduino Masterclass',
            img: dev3Img
        },
        {
            id: 4,
            category: 'Workshops',
            title: 'IoT Hands-on Session',
            img: dev4Img
        },
        {
            id: 5,
            category: 'Cultural',
            title: 'Society Annual Meet',
            img: dev5Img
        },
        {
            id: 6,
            category: 'Cultural',
            title: 'Tech-Night Celebration',
            img: dev6Img
        }
    ];

    const categories = ['All', 'Techfest', 'Workshops', 'Cultural'];

    const filteredImages = filter === 'All'
        ? galleryData
        : galleryData.filter(item => item.category === filter);

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
                            <div key={item.id} className="gallery-item">
                                <img src={item.img} alt={item.title} className="gallery-img" />
                                <div className="gallery-overlay">
                                    <span className="item-cat">{item.category}</span>
                                    <h3 className="item-title">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;