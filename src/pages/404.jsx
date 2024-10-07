import React from 'react'
import { NavHashLink } from 'react-router-hash-link';
import Flash from '../assets/components/Flash';
import Footer from "../assets/components/Footer";
import "../assets/stylesheets/Error.scss";

export default function Error() {
  return (
   <>
    <div className='caja__error'>
    <div className='error' >
        <Flash Tipo="error"/>
      <p className='error__mensaje'>404</p>
      <p className='error__descripcion'>Upps... Parese que este sitio no esta disponibles o no exite.</p>
      < NavHashLink to="/#" >  <button className='error__botom'>Volver al inicio</button> </NavHashLink>
    </div>
    </div>

<Footer/>
</>
  )
}
