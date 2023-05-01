import React from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
  <>
  <div className='entry__line'> <p>Welcome to <strong>Carlo's Company</strong>, a company with a face behind</p></div>
    <header className='container'>
        <div className='phone__container'>
            <FontAwesomeIcon icon={faPhone} size='lg' style={{color: "#9fd965",}} />
            <p className='phone__number'>240-418-5291</p>
        </div>
        <div className='phone__container'>
            <FontAwesomeIcon icon={faClock} size='lg' style={{color: "#9fd965",}} />
            <p className='phone__number'>Sun - Mon: 24 hours</p>
        </div>
    </header>
  </>
  )
}
export default Header