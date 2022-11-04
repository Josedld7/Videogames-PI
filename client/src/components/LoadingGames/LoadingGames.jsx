import React from 'react'
import style from './loadingGames.module.css'


const LoadingGames = () => {
  return (

    <div>
      <div className={style.center}>
      <div className={style.container_loading}>
      <div className={style.spinner}></div>
      <p  className={style.cargando}>Loading...</p>
    </div>
      </div>
    </div>
  )
}

export default LoadingGames