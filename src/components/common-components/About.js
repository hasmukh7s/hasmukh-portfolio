import React, { useEffect, useState } from "react";
import Section_heading from "./Section_heading";
import ProfileImage from '../../images/banner-img.jpg';
import resume from '../../docs/Hasmukh_Resume.pdf';








function About() {



    return (

        <>




            <section className="about gp sky-bg overlay over-hidden relative">
                <div className="container">
                    <Section_heading
                        heading='About Me'
                        subHeading='Why Choose Me ?'
                    />
                    <div className=" ">
                        <div class="card">
                            <div className="card-inner">
                                {/* <h1 class="title">Designed For Work</h1> */}

                                <p class="subtitle">I’ve been working from 2+ year as a Frontend Developer. During that time I’ve been trained software platforms and systems. I have experience in HTML5, CSS3, Tailwind, Bootstrap, Wordpress(Design), Jquery and Javascript. I am Passionate about implementing and launching new projects. Looking to start the career as  Frontend Developer with a reputed firm driven by technology.
                                    </p>
                                {/* <ul className="about-skill d-flex">
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>
                                    <li>the first ever</li>

                                </ul> */}
                                <div className="btn-group-two">


                                    <a className="primary-btn" href="tel:8200899614">Hire Me</a>
                                    <a target="_blank" className="primary-btn two" href={resume}>Download CV</a>
                                </div>

                            </div>
                            <div className="profile-image">

                            {/* <img src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' alt="Profile Image" /> */}
                                <img src={ProfileImage} alt="Profile Image" />
                            </div>
                        </div>

                        <div class="blob"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;