import React from 'react';
import '../styles/ctabutton.css';

const wpLink = 'https://wa.me/12404185291';


const CtaButton = (props) => {
  return (
    <a href={wpLink} target="_blank" rel="noopener noreferrer">
      <button onClick={props.onClick} >
        {props.icon}
        {props.text}
    </button>
    </a>
    
  )
}

export default CtaButton