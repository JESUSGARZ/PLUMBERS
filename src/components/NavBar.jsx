import React from 'react';
import '../styles/navbar.css'


const NavBar = () => {
  return (
    <div className='navbar__container'>
        <nav>
            <ul>
                <li><a href='#main-section'>Inicio</a></li>
                <li><a href='#third-section'>Servicios</a></li>
                <li><a href='#second-section'>Nosotros</a></li>
                <li><a href='#footer'>Contacto</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar