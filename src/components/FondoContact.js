import React from 'react';
import imgContact from '../img/img-contact.png';
import './FondoServices.css';



const ContactFondo = () => {
  return (
    <>
    <div className="container-contact">

<img
   className="d-block w-100"
   src={imgContact}
   alt="imcetron"
 />

<div className="container-title">
<div className="title-main">
<h3 className="title-contact">Contacto</h3>
</div>
</div>
  

</div>

<div className='container-atention'>
<h2>Atencion al cliente</h2>

</div>

        </>
  )
}

export default ContactFondo;