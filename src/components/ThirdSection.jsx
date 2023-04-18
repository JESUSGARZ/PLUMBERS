import React from 'react';
import Card from './Card';
import '../styles/thirdsection.css';
import plomero from '../utils/plomero.jpg';
import caja from '../utils/caja.jpeg';
import goteras from '../utils/goteras.jpeg';
import destape from '../utils/detape.jpeg';
import sonda from '../utils/sonda.jpeg';
import tejado from '../utils/centro.jpeg';

const ThirdSection = () => {
    const services = [
        {   
            title: 'Plomeria', 
            description:'Ofrecemos servicios de remplazo de tuberia, mantenimiento y reparacion asi como instalaciones nuevas', 
            url:plomero
        },
        {
            title: 'Destape Cañeria', 
            description:'Destapamos sin romper, servicio de sonda electrica, varillas y mas', 
            url:destape
        },
        {
            title: 'Sonda Eléctrica', 
            description:' Este trabajo se realiza con una máquina especial eléctrica que nos permite sondear la tubería gracias a una especie de guaya que hace el recorrido de la tubería hasta encontrar la obstrucción o mugre que la está tapando,', 
            url:sonda
        },
        {
            title: 'Reparacion de Filtraciones y Goteras', 
            description:'Estamos capacitados para detectar y reparar filtraciones, gotera, humedades y rupturas en tuberias de suministro, paredes, techos o pisos ', 
            url:goteras
        },
        {
            title: 'Destape de Cajas de Inspeccion', 
            description:'Contamos con personal con años de experiencia destapando cajas negras y de inspeccion', 
            url:caja
        },
        {
            title: 'Reparación de techos', 
            description:'Servicio de reparación de téjas, tejados y cubiertas, arreglo de goteras e impermeabilizaciones.', 
            url:tejado
        },
    ]
  return (
    <section className='ThirdSection__container'id='third-section' >
        <div>
            <h2>Nuestros Servicios</h2>
            <div className='cards__container'>
                {services.map((service) => {
                    return <Card title={service.title} description={service.description} url={service.url}/>
                })}
            </div>
        </div>
    </section> )
}

export default ThirdSection;