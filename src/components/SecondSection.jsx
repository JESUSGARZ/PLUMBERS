import React from 'react';
import trabajando from '../utils/video.mp4';
import Video from './Video';
import '../styles/secondsection.css'

const SecondSection = () => {
  return (
    <section className='secondSection__container' id='second-section'>
        <div>
            <div><h2>ABOUT</h2>  <h2>US</h2></div>
            <p>Los plomeros especialistas de nuestra empresa estamos en capacidad de valorar, diagnosticar, prevenir, corregir y tratar todos los problemas relacionados con la tubería, <strong>fugas y filtraciones</strong> , desagüé y <strong>destapes de cañerías</strong>, todos nuestros clientes están satisfechos y cumplimos con el 100% de calidad.<br/><br/>
            Nuestra empresa cumple con todas las normas para brindarte el mejor servicio de plomería en Chía, Cajicá y toda la Sabana de Bogotá.</p>
        </div>
        <Video video = {trabajando} format= 'video/mp4'/>
    </section> )
}

export default SecondSection