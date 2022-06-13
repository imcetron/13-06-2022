import React from 'react';
import './FondoServices.css';
import banerS from '../img/baner-services.png';



const ServicesFondo = () => {
  return (
    <>
    <div className="container-numero">

<img
   className="d-block w-100"
   src={banerS}
   alt="imcetron"
 />
<div className='container-title'>
<div className="title-main">
<h3 className="title-service">Nuestros Servicios</h3>
</div>
<p className='texto-services'>Garantizamos la mejor experiencia
 a nuestros clientes</p>
</div>   

</div>
<div className='container-one'><h2>Mantenimiento pruebas</h2></div>
<div className='container-two'><h2>Equipos para proyectos</h2></div>
<div className='container-tree'><h2>Equipos de medicion</h2></div>
        </>
  )
}

export default ServicesFondo;
