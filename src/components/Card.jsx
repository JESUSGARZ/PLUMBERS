import React from 'react';
import '../styles/card.css';

const Card = (props) => {
  return (
    <div className='card__container'>
        <img src={props.url} alt="service"  />
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default Card