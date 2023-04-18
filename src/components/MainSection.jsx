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
        <h1>Destape Cañerias <strong>24</strong> Horas</h1>
        <p>REVISIÓN GRATUITA</p>
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
                <CtaButton   icon= {wp} onClick = {whatsaap} text = "Cotizar Ahora" />
            </div>  
    </div>
    
</section>
)
}

export default MainSection