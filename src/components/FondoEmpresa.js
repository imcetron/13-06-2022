import React from 'react';
import imgEmpresa from '../img/img-empresa.png';
import './FondoServices.css';



const EmpresaFondo = () => {
  return (
    <>
    <div className="container-numero">

<img
   className="d-block w-100"
   src={imgEmpresa}
   alt="imcetron"
 />
<div className='container-title'>
<div className="title-main">
<h3 className="title-empresa">Acerca de Imcetron</h3>
</div>
<p className='texto-empresa'>Conoce más sobre nosotros</p>
</div>   
</div>
<div className='container-somos'>
<h2>¿Quienes Somos?</h2>
<p>Somos una empresa peruana fundada en el año 1998, con la finalidad de importar y comercializar materiales eléctricos y aislantes utilizados en la fabricación, reparación 
  y mantenimiento de motores y generadores eléctricos en general. <br></br>Contamos con una amplia gama de materiales de alta calidad, lo cual sin duda ha originado un beneficio significativo al área de reparaciones y 
  mantenciones de los sectores: industrias, minerías generadores y distribuidores de energía, pesqueras y azucareras. <br></br>Con el propósito de sustentar adecuadamente la calidad de nuestros productos, 
  nos preocupamos de que estos cumplan con las normas correspondientes, como fichas técnicas y normas de seguridad, lo cual es importante en la actualidad.</p>

</div>
<div className='container-empresas'>
<h2>Nuestra Historia</h2>
</div>
<div className='container-empresas'>
<h2>Nuestra mision</h2>
</div>
<div className='container-empresas'>
<h2>Nuestra vision</h2>
</div>

        </>
  )
}

export default EmpresaFondo;