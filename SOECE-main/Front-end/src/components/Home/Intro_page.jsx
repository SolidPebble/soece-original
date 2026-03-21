// import "./Intro_page.css";

// const Intro_page = () => {
//     return <>
//         <div className="intro-page">
//             <div className="soece">SOECE</div>
//             <div className="tagline">Lets Make Electronics Easy</div>
//             <div className="nitj"><button className="nitj-button">NITJ Official <span>&gt;&gt;</span></button></div>
//             <div className="department">Department of Electronics and Communication Engineering</div>
//             <div className="department">NIT Jalandhar</div>
//         </div>
//     </>
// }

// export default Intro_page;

import "./Intro_page.css";

const Intro_page = () => {
    return (
        <section className="intro-container">
            <div className="intro-overlay">
                <div className="intro-content">
                    <h1 className="soece-title">SOECE</h1>
                    <p className="tagline">Let's Make Electronics Easy</p>
                    
                    <div className="cta-section">
                        <a
                            href="https://www.nitj.ac.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nitj-link"
                        >
                            <button className="nitj-button">
                                NITJ Official <span className="arrow">≫</span>
                            </button>
                        </a>
                    </div>

                    <div className="info-footer">
                        <p className="dept-name">Department of Electronics and Communication Engineering</p>
                        <p className="college-name">NIT JALANDHAR</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro_page;