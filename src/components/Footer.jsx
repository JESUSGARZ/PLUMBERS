import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {faFacebookF, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

const Footer = () => {
  return (
    <>
    <footer id='footer'>
      <div className='socialmedia__container'>
        <a href="https://web.facebook.com/profile.php?id=100091588283152" className='socialmedia' target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faFacebookF} size="2xl" style={{color: "#ffffff",}} />}</a>
        <a href="https://www.instagram.com/plumbers2072/" className='socialmedia' target="_blank" rel="noopener noreferrer">{<FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#ffffff",}} />}</a>
        <a href="https://wa.me/573117284983" className='socialmedia' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#ffffff",}} /></a>
      </div>
      <div className='services__container'>
        <h3>Servicios</h3>
          <p>Plomeria</p>
          <p>Destape de cañerias</p>
          <p>Sonda eléctrica</p>
          <p>Reparacion de filraciones y goteras</p>
      </div>
      <div className='services__container'>
        <h3>Otros servicios</h3>
          <p>Servicios locativos</p>
          <p>Instalacion de draiwall y pvc</p>
          <p>Pisos Laminados</p>
          <p>Enchapes</p>
          <p>Pisos en cpvc</p>
      </div>
      <div className='contact__container'>
        <h3>Contacto</h3>
          <div className='contact__number'>
            <FontAwesomeIcon icon={faPhone} size='lg' style={{color: "#ffffff",}} />
            <p>311-728-4983</p>
          </div>
          <div className='contact__email'>
            <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{color: "#ffffff",}} />
            <p>311-728-4983</p>
          </div>
          <div className='contact__email'>
            <FontAwesomeIcon icon={faEnvelope} size="lg" style={{color: "#ffffff",}} />
            <p>ardila2072@gmail.com</p>
          </div>
      </div>     
    </footer>
    <div className='copyrigth'>
      <p>© 2023 - Plumbers. Creado por Plumbers Todos los derechos Reservados.</p>
    </div>
    </>
  )
}

export default Footer