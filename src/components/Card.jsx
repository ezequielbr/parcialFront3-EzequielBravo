import React from 'react'
import {carta} from '../styles/Card.module.css'

const Card = ({usuario}) => {
  return (
    <div className={carta} >
      <h3>Bienvenido, {usuario.nombre}!</h3>
      <h4> {usuario.peliculaFavorita} es una muy buena pelicula!.</h4>
      <h4>{usuario.actorFavorito} esta en el top mejores actores</h4>
    </div>
  )
}

export default Card