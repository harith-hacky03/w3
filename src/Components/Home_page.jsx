import React from 'react'
import video from '../assets/background_video/video.mp4'
import './main.scss'
const Landing = () => {
  return (
    <div className=''>
        <video id='myVideo' src={video} autoPlay muted loop/>
        <div className='scan'></div>
    </div>
  ) 
}

export default Landing
