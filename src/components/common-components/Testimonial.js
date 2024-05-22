import React, { Component } from "react";
import Testimonial_API from "./Testimonial_API";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Section_heading from "./Section_heading";
import LinkedInIcon from '../../images/icons/linkedinskyblue.svg';



const Testimonial = () => {
    
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      };
  return (
    <section className="testimonial gp">
        <div className="container">
        <Section_heading 
        heading='other say for me'
        subHeading='What Say About me'
        />
        
        <Slider {...settings}>
        {Testimonial_API.map(function cards(val) {
            return (
                <>
                <div className="item text-center">
                    <div className="item-img">
                      <div>
                        <a href="https://in.linkedin.com/in/hasmukh-shah-4999ba1b3">
                        <img className="linkedin" src={LinkedInIcon} alt="linked In" />
                        </a>
                        <p>{val.info}</p>
                        
                          
                        
                        <img className="profileImage" src={val.profileImage} alt="Profile Img"/>
                        </div>
                        <h2>{val.name}</h2>
                        <h5>{val.post}</h5>
                    </div>
                    
                </div>
                </>
            )
        })}
    </Slider>
        </div>
      </section>
  )
}
export default Testimonial;