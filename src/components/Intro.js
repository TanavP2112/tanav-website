import React from 'react'
import './Intro.css'

function Intro(props) {
  return (
    <div className='intro-container'>
        <video src= '/videos/video-bg.mp4' autoPlay loop muted/>
        <h1>{props.title}</h1>
    </div>
  )
}

export default Intro