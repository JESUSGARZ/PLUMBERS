import React from 'react'
import CtaButton from './CtaButton';
import '../styles/mainsection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';


const MainSection = () => {
    const whatsaap = () => {
        console.log('whatsaap');
    }
    const wp = <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{color: "#ffffff",}} />
    
return (
<section className='main-section__container ' id='main-section'>
    <div className='main-section__title'>
        <h1>Turning great visions into projects </h1>
        <p>LET'S MAKE IT REAL</p>
    </div>
    <div className='main-section__check '>
        
            <div className='main-section__item'>
                <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#dd6b00",}} />
                <span>Servicio 24/7</span>
            </div>
            <div className='main-section__item'>
                <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#dd6b00",}} />
                <span>Revision Totalmente Gratis</span>
            </div>
            <div className='main-section__item'>
                <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#dd6b00",}} />
                <span>Garantizamos Un Precio Justo</span>
            </div>
            <div className='main-section__item'>
                <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#dd6b00",}} />
                <span>Cotizamos Antes de Realizar el Trabajo</span>
            </div>
            <div className='buttons__container'>
                <CtaButton    onClick = {whatsaap} text = "Get a Quote" />
            </div>  
    </div>
    
</section>
)
}

export default MainSection