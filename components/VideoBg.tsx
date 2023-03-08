import React from 'react';

export const VideoBg = () => {
  return (
    <div className='video-bg'>
      <video autoPlay={true} muted={true} loop={true} id='bg-video'>
        <source
          // src='/bgvideo.mp4'
          src='https://faculty-public.s3.us-east-2.amazonaws.com/x8c-site-bgvideo.mp4'
          type='video/mp4'
        />
      </video>
      <div className='video-bg__container'></div>
      <div className='video-bg__container-shadow'></div>
    </div>
  );
};
