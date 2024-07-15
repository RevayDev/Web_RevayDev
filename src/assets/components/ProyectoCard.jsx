import React from 'react'
import "./styles/proyectoCard.scss";
export default function ProyectoCard(props) {
  return (
  
    
    <div class={props.max ? 'proyecto_card' : 'proyecto__interior'}>

  
 <div className='titleAndVersion'> <h1 class="proyecto__carta--titulo">{props.titulo}  </h1> {props.vercion}</div>
    
      <p class="proyecto__descripcion">{props.descripcion}</p>
    
      <div class="proyecto__botones">
      <span class={props.codigo ? 'proyecto__boton proyecto__boton--codigo' : ''}>
        <a href={props.url1} target="_blank">
        {props.icono_url1}   {props.texto_url1}</a>
        </span>
        <span class={props.info ? 'proyecto__boton proyecto__boton--info' : ''}>
          <a href={props.url2} target="_blank">
          {props.icono_url2}  {props.texto_url2}</a>
        </span>
    
      </div>
    </div>
    
   
  )
}
