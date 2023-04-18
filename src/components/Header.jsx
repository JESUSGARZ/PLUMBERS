import React from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import image from '../utils/PLUMBERS.svg'

const Header = () => {
  return (
    <header className='container'>
        <img src={image} alt="logo plumbers" />
        <div className='phone__container'>
            <FontAwesomeIcon icon={faPhone} size='lg' style={{color: "#ffffff",}} />
            <p className='phone__number'>311-728-4983</p>
        </div>
        <div className='phone__container'>
            <FontAwesomeIcon icon={faClock} size='lg' style={{color: "#ffffff",}} />
            <p className='phone__number'>Lun - Dom: 24 Horas</p>
        </div>
        
    </header>
  )
}
export default Header