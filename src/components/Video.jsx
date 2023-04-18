import React from 'react';
import '../styles/video.css'

const Video = (props) => {
  return (
    <div className='video__container'>
        <video  controls>
            <source src={ props.video} type={ props.format }/>
        </video>
    </div>
  )
}

export default Video