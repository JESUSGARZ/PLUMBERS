import React from 'react';
import '../styles/banner.css';
import tejado from '../utils/tejado.mp4';
import Video from './Video.jsx'

const Banner = () => {
  return (
    <>
        <div className='banner__container'>
          <div>
            <h2>Reparación de <strong>Tejados</strong> </h2>
            <p>Servicio de reparación de téjas, tejados y cubiertas,  arreglo de goteras e <strong>impermeabilizaciones.</strong> <br/><br/> Damos garantia de nuestro trabajo 100%</p>
          </div>
          <div>
            <Video video = {tejado} format= 'video/mp4'/>
          </div> 
        </div>
    </>
  )
}

export default Banner