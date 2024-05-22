import React from 'react';
import Skill_left_API from './Skill_left_API';
import Slider from "react-slick";

const Skill_left_Slider = () => {
    const settings = {
        dots: false,
        arrows: false,
        slidesToShow: 6,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 11000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToScroll: -2,
      responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 2,
              }
            }
          ]
      };

  return (
    <div className='skill-right-slider'>
        <Slider {...settings}>
        {
            Skill_left_API.map((val) => {
                return (
                    <div key={val.id} className='skill-one'>
                        <div className='skill-icon'>
                        <img src={val.icon} alt="React" />    
                        </div>
                        
                        <h3>{val.iconName}</h3>
                    </div>
                )
            })
        }
        </Slider>
    </div>

  )
}
export default Skill_left_Slider;
