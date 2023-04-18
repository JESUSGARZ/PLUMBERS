import React from 'react';
import '../styles/icon.css'

const Icon = (props) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img className='icon' src={props.image} alt="whatsaap logo" />
    </a>
    
  )
}

export default Icon