import React from 'react'
import "./styles/Habilidades_rapidas.scss";

export default function Habilidades_rapidas(props) {
  return (
    <div className='Habilidades-rapidas__item'>
    <span className='item__icon'><i className={props.icon}></i></span>
    <p className='item__title'>{props.title} </p>
  </div>
  )
}
