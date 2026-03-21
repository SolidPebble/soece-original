// import "./Description_page.css";
// import robo from "../../assets/robo-image.png"

// const Description_page = () => {
//     return <>
//         <div className="description_page">
//             <div className="description_container" >
//                 <div className="description_container_part1">
//                     <h2 className="description_page_heading">SOECE</h2>
//                     <h5>Lets Make Electronics Easy</h5>
//                     <p>Society for Progression of Instrumentation and Control Engineering (SPICE) is a society which was established in the department of Instrumentation and Control Engineering (ICE), Dr. B. R. Ambedkar National Institute of Technology, Jalandhar formed on December 1, 1994.</p>
//                     <p>The society is continuously working for the welfare of students of Instrumentation and Control Engineering. A number of events have been organized under this society such as expert lectures from industry, workshops on robotics, career guidance & industrial tours.</p>
//                     <button>Explore More <span>&gt;&gt;</span></button>
//                 </div>
//                 <div className="description_container_part2">
//                     <img src={robo} alt="image" className="robo-image" />
//                 </div>
//             </div>
//         </div>
//     </>
// }

// export default Description_page;

import "./Description_page.css";
import robo from "../../assets/robo-image.png";

const Description_page = () => {
    return (
        <div className="description_page">
            <div className="description_card">
                <div className="description_text_side">
                    <h2 className="description_heading">SOECE</h2>
                    <h5 className="description_subheading">Let's Make Electronics Easy</h5>
                    
                    <div className="description_content">
                        <p>
                            The Society of Electronics and Communication Engineers (SOECE) is the premier 
                            student body of the ECE Department at NIT Jalandhar. We are dedicated to 
                            fostering technical excellence and innovation.
                        </p>
                        <p>
                            Our society bridges the gap between academic theory and industrial practice through 
                            expert lectures, robotics workshops, and career guidance sessions designed 
                            for the welfare of the student community.
                        </p>
                    </div>

                    {/* External Link Redirection */}
                    <a 
                        href="https://departments.nitj.ac.in/dept/ece/home" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="explore_link"
                    >
                        <button className="explore_btn">
                            Explore More <span className="btn_arrow">≫</span>
                        </button>
                    </a>
                </div>
                
                <div className="description_image_side">
                    <div className="image_glow_effect">
                        <img src={robo} alt="Robotics Illustration" className="robo_image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description_page;