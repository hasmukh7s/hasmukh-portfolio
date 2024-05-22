import React from "react";
import logo from '../../images/logo.png';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import linkedIn from '../../images/icons/linkedinskyblue.svg';
import gitIcon from '../../images/icons/git.svg';
import $ from "jquery";

$(document).ready(function () {
    
});  
function Footer() {
    return (
        <>
            <footer className="gp">
                <div class="container">
                    <div className="footer-content d-flex justify-space-between">
                        <div className="footer-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="footer-mail">
                            <h4 className="footer-heading relative">Email Me</h4>
                            <div className="d-flex justify-content-center  text-center direction-column">
                                <EmailIcon></EmailIcon>
                                <a href="mailto:hasmukhweb19@gmail.com">hasmukhweb19@gmail.com</a>
                            </div>
                        </div>
                        <div className="footer-contact">

                            <h4 className="footer-heading relative">Contact Me</h4>
                            <div className="d-flex justify-content-center  text-center direction-column">
                                <PhoneInTalkIcon></PhoneInTalkIcon>
                                <a href="tel:8200899614">+91-8200899614</a>
                            </div>
                        </div>

                        <div className="footer-address">
                            <h4 className="footer-heading relative">Address</h4>
                            <div className="d-flex justify-content-center  direction-column">
                            <LocationOnIcon></LocationOnIcon>
                            <p>Greater Ahmedabad, Gujarat, India</p>
                            </div>
                        </div>

                    </div>
                    <div className="footer-privacy d-flex justify-space-between align-item-center">
                        <p>2023 © Hasmukh Shah, All Rights Reserved</p>
                        <div className="d-flex">
                        <a href="https://in.linkedin.com/in/hasmukh-shah-4999ba1b3" className="d-flex"><img src={linkedIn} alt="linkedIn " /></a>
                        {/* <a href="https://github.com/Pekskumar" className="d-flex"><img src={gitIcon} alt="linkedIn " /></a> */}
                        </div>
                    </div>
                    
                </div>
            </footer >
        </>
    )
}
export default Footer;