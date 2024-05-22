import React from 'react';
import VideoFiles from '../../video/call-video.mp4';

export default props => {
  return (
    <video
    autoPlay muted loop
          src={VideoFiles}
          class="sfsaf"
        />
  );
};