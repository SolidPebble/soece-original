import "./Faculty_page.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import induImage from "../../assets/indu-mam.png";
import secondImage from "../../assets/manjeet-sir-new.jpg"; // add second image

const facultyData = [
    {
        name: "Dr. Indu Saini",
        designation: "Associate Professor, ECE Dept.",
        image: induImage,
        quote1:
            "Innovation is not a destination, it's a direction. Every idea we nurture today becomes the foundation someone else will build upon tomorrow.",
        quote2:
            "The most powerful tool in any room is a curious mind. We don't just solve problems — we reimagine the questions."
    },
    {
        name: "Dr. Manjeet Singh",
        designation: "Assistant Professor, ECE Dept.",
        image: secondImage,
        quote1:
            "Innovation and research are the pillars of engineering excellence.",
        quote2:
            "Our aim is to guide students toward strong fundamentals and real-world implementation."
    }
];

const Faculty_page = () => {
    const [index, setIndex] = useState(0);

    const nextAdvisor = () => {
        setIndex((prev) => (prev + 1) % facultyData.length);
    };

    const faculty = facultyData[index];

    return (
        <section className="faculty_section">
            <div className="faculty_card">
                <h1 className="faculty_title">Our Faculty Advisor</h1>
                <div className="faculty_accent_bar"></div>

                <div className="faculty_content_flex">
                    <div className="faculty_image_container">
                        <Link to="/" className="faculty_link_wrapper">
                            <img src={faculty.image} alt="Faculty Advisor" className="faculty_img" />
                        </Link>
                    </div>

                    <div className="faculty_text_container">
                        <div className="quote_icon">“</div>
                        <p>{faculty.quote1}</p>
                        <p>{faculty.quote2}</p>

                        <div className="faculty_signature">
                            <h4>{faculty.name}</h4>
                            <span>{faculty.designation}</span>
                        </div>
                    </div>
                </div>
                {/* Bottom Right Button */}
                <button className="faculty_switch_btn" onClick={nextAdvisor}>
                    Next Advisor →
                </button>
            </div>
        </section>
    );
};

export default Faculty_page;