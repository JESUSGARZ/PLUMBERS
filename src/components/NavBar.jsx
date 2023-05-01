import React from 'react';
import '../styles/navbar.css'


const NavBar = () => {
  return (
    <div className='navbar__container'>
        <nav>
            <ul>
                <li><a href='#main-section'>HOME</a></li>
                <li><a href='#third-section'>SERVICES</a></li>
                <li><a href='#second-section'>ABOUT US</a></li>
                <li><a href='#footer'>CONTACT</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar