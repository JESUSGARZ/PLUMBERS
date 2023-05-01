import React, { useState } from 'react'
import '../styles/hamburgermenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='navbar'>
        <div className='nav_logo'>
            <img src="#" alt="" />
        </div>
        <nav className={`nav_items ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <a href='#main-section'>HOME</a>
            <a href='#third-section'>SERVICES</a>
            <a href='#second-section'>ABOUT US</a>
            <a href='#footer'>CONTACT</a>
        </nav>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faBars} size="2xl" style={{color: "#9fd965",}} />
        </div>
    </div>
  )
}

export default HamburgerMenu