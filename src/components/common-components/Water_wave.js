import React from 'react';
import WaterWave from 'react-water-wave';
// import image from '../../images/banner-img.jpg';


function Water_wave() {
    
    return (
        <>
         <WaterWave
        className="image"
        // imageUrl={image}
        perturbance={0}
        resolution={512}
        dropRadius={30}
        style={{ height: "100%" }}
      >
        {({ pause, play, set }) => (
          <div className="container">
            
            
            
            
          </div>
        )}
      </WaterWave>
        </>
    )
}

export default Water_wave;