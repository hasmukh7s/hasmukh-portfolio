import React from 'react';
import Section_heading from './Section_heading';
import Skill_Right_Slider from './Skill_Right_Slider';
import Skill_left_Slider from './Skill_left_Slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Skills = () => {
  return (
    <section className='skills gp'>
        <div className='container'>
        <Section_heading 
        heading='my skills'
        subHeading='my proficiency in skill'
        />
        </div>
        <div className='skill-inner'>
            <Skill_Right_Slider />
            <Skill_left_Slider />
        </div>
        
    </section>
  )
}
export default Skills;
