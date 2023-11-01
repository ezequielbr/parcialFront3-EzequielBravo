import React from 'react'

const Card = ({usuario}) => {
  return (
    <div>
      <h3>Bienvenido, {usuario.nombre}!</h3>
      <h4> {usuario.peliculaFavorita} es una muy buena pelicula!.</h4>
      <h4>{usuario.actorFavorito} esta en el top mejores actores</h4>
    </div>
  )
}

export default Card