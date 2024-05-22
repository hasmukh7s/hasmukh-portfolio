import React from 'react'

const Section_heading = (props) => {
  return (
    <div className='section-heading relative'>
        <h2>{props.heading}<span>{props.subHeading}</span></h2>
    </div>
  )
}
export default Section_heading;