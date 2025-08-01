import React from "react";
import "./About.css";
import about_img from "../../assets/about_img.png"
import play_icon from "../../assets/play_icon.png"

const About = ({setPlayState}) => {
    return (
        <>
            <div className="about">
                <div className="about-left">
                    <img src={about_img} alt="" className="about-img"/>
                    <img src={play_icon} alt="" className="play-icon" onClick={()=>setPlayState(true)}/>
                </div>
                <div className="about-right">
                    <h3>ABOUT UNIVERSITY</h3>
                    <h2>Nurturing Tomorrow's Leaders Today</h2>
                    <p>Embark on a tranformative educational journey with our university's compehensive educational programs. Our cutting-edge curriculum is designed to empower students with the knowlegde , skills , and expertise needed to excel in the dynamic field of education.</p>
                    <p>With the focus on innovation , hands on learning, and personalized mentorship , our programs  prepare aspiring educators to make a meaningful impact in classroom, schools, and communities.</p>
                    <p>Whether you apsire to become a teacher , administrator , courselor or educational leader , our diverse range of programs offers the pathway to achieve your goals and unlock your full potential in shaping the future of eduaction.</p>
                </div>
            </div>
        </>
    );
};

export default About;