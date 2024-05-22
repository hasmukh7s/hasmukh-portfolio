import React from "react";
import $ from "jquery";
import logo from '../../images/logo.png';
import resume from '../../docs/Hasmukh_Resume.pdf';

$(document).ready(function () {
    $('.menu-toggle').on("click", function () {
        $('body').toggleClass('nav-open');

        $(this).toggleClass('open');
        $('html').toggleClass(' over-hidden');
        $('header').toggleClass('border');
        $('.header-menu').slideToggle();
    });

    $(".contact-call").click(function () {
        $('html, body').animate({
            scrollTop: $(".call-to-action").offset().top
        }, 2000);
    });

    $(".testimonials").click(function () {
        $('html, body').animate({
            scrollTop: $(".testimonial").offset().top
        }, 2000);
    });

    $(".aboutUs").click(function () {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 2000);
        // $('.header-menu').hide();
        
    });

    $(".resumeMe").click(function () {
        $('html, body').animate({
            scrollTop: $(".tabbing").offset().top
        }, 2000);
    });

    $(".myExpertise").click(function () {
        $('html, body').animate({
            scrollTop: $(".highlights").offset().top
        }, 2000);
    });

    
    $(".mySkills").click(function () {
        $('html, body').animate({
            scrollTop: $(".skills").offset().top
        }, 2000);

    });

    $(".myWorks").click(function () {
        $('html, body').animate({
            scrollTop: $(".projects").offset().top
        }, 2000);
    });

    

    

    


    

    

    // bottom to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
    });
    

});

function Header() {
    return (
        <>
            <header className="">
                <div className="container d-flex justify-space-between align-item-center relative">


                    <div className="header-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="header-right d-flex align-item-center">


                        <ul className="header-menu d-flex align-item-center">
                            <li><a className="aboutUs" href="#">About Me</a></li>
                            <li><a className="resumeMe" href="#">Resume</a></li>
                            <li><a className="myExpertise" href="#">Expertise</a></li>
                            <li><a className="testimonials" href="#">Testimonial</a></li>
                            <li><a className="myWorks" href="#">Works</a></li>
                            <li><a className="mySkills" href="#">Skills</a></li>
                            
                            <li><a className="contact-call" href="#">Contact</a></li>
                            <li className="mobile-show "><a target="_blank" className="primary-btn text-center" href={resume}>Download CV</a></li>
                        </ul>

                        <div className="download-btn">
                            <a target="_blank" className="primary-btn" href={resume}>Download CV</a>
                        </div>

                        <a href="#" class="menu-toggle">
                            <span class="hamburger">Menu</span>
                        </a>
                    </div>
                    

                </div>
                <a href="javascript:" id="return-to-top"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697L11.4697 7.46967C11.7626 7.17678 12.2374 7.17678 12.5303 7.46967L18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303C18.2374 14.8232 17.7626 14.8232 17.4697 14.5303L12 9.06066L6.53033 14.5303C6.23744 14.8232 5.76256 14.8232 5.46967 14.5303Z" fill="#fff"/>
</svg>
</a>
            </header>
        </>
    )
}
export default Header;
