import React from 'react';
// import VideoFiles from '../../video/banner-video.mp4';
import phoneIcon from '../../images/icons/phone.svg';
const CalltoAction = () => {
  return (
    <section className='call-to-action gp'>
        {/* <video
    autoPlay muted loop
          src={VideoFiles}
          class="sfsaf"
        /> */}
        <div className='container  text-center'>
            <div className='call-inner'>
                <img className='up-down' src={phoneIcon} alt="phone icon" />
            <p> Yes, this is possible with Me.</p>
            <h1>Do you want to hire Me. </h1>
            <a className='primary-btn' href="tel:8200899614">Talk With Me</a> 
            </div>
        </div>
    </section>
  )
}
export default CalltoAction;
