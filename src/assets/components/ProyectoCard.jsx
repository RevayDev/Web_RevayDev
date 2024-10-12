import React from 'react'
import "./styles/proyectoCard.scss";
export default function ProyectoCard(props) {
  return (
  
    
    <div className={props.max ? 'proyecto_card' : 'proyecto__interior'}>

  
 <div className='titleAndVersion'> <h1 class="proyecto__carta--titulo">{props.titulo}  </h1> {props.vercion}</div>
    
      <p class="proyecto__descripcion">{props.descripcion}</p>
    
      <div class="proyecto__botones">
      <a 
  href={props.url1} 
  target="_blank" 
  rel="noopener noreferrer" 
  className={props.codigo ? 'proyecto__boton proyecto__boton--codigo' : 'proyecto__boton'}
>
  {props.icono_url1} {props.texto_url1}
</a>

        <a  href={props.url2} target="_blank"class={props.info ? 'proyecto__boton proyecto__boton--info' : ''}>
       
          {props.icono_url2}  {props.texto_url2}</a>
  
    
      </div>
    </div>
    
   
  )
}
