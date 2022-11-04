import React from 'react'
import style from './NoFoundGame.module.css'

const NoFoundGame = () => {
  return (
    <div className={style.container}>
        <div>
            <h1 className={style.description}>No hay resutados para la busqueda, intente nuevamente! </h1>
        </div>
    </div>
  )
}

export default NoFoundGame