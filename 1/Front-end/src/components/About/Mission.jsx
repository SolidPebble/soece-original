import "./Mission.css"

const Mission = () => {
    return (
        <section className="mission_section">
            <div className="mission_card">
                <div className="mission_content_wrapper">
                    <h2 className="mission_title">Our Vision & Mission</h2>
                    <div className="mission_accent_bar"></div>
                    
                    <div className="mission_text_container">
                        <p className="vision_highlight">
                            We aim to organise various technical competitions covering participation from students across the globe and build a strong mentorship program.
                        </p>
                        
                        <ul className="mission_list">
                            <li>To create and disseminate knowledge through research, quality education and creative inquiry.</li>
                            <li>To orient education and research towards latest developments through close industry interactions.</li>
                            <li>To organize workshops, bootcamps and short-term courses for hands-on experience in emerging technologies.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mission;