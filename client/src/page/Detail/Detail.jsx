import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getDetail } from "../../redux/actions";
import LoadingGames from "../../components/LoadingGames/LoadingGames";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const gameId = useSelector((state) => state.detail);
  const loadingID = useSelector((state) => state.loadingId);

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);

  return (
    <div className={style.container}>
      {loadingID ? (
        <LoadingGames />
      ) : (
      <div className={style.container_cards}>
        <div className={style.container_cards_interno}>
          <div className={style.container_superior}>
            <div className={style.container_image_rating_lanzamiento}>
              {/* mapeo de la imagen */}
              <div>
                {gameId.background_image ? (
                  <img
                    className={style.imagen}
                    src={gameId.background_image}
                    alt={gameId.name}
                  />
                ) : (
                  <img src={gameId.imagen} alt={gameId.nombre} />
                )}
              </div>
              {/* mapeo del nombre */}
              <div>
                {gameId.name ? (
                  <h1 className={style.title}>{gameId.name}</h1>
                ) : (
                  <h1 className={style.title}>{gameId.nombre}</h1>
                )}
              </div>
              <div className={style.rating_lanzamiento}>
                {/* mapeo de la fecha de lanzamiento */}
                <div>
                  {gameId.released ? (
                    <p className={style.lanzamiento}>{gameId.released}</p>
                  ) : (
                    <p className={style.lanzamiento}> {gameId.lanzamiento}</p>
                  )}
                </div>

                <div>
                  <p className={style.rating}>{gameId.rating}</p>
                </div>
              </div>
            </div>

            <div>
              {/* mapeo de la descripcion */}
              {gameId.description_raw ? (
                <p className={style.description}>{gameId.description_raw}</p>
              ) : (
                <p className={style.description}>{gameId.descripcion}</p>
              )}
            </div>
          </div>


         <div className={style.container_inferior_generos_plataformas}>

          <div>
            {/* mapeo de los generos */}
            {gameId.genres ? (
              <ul>
                {gameId.genres &&
                  gameId.genres
                    .map((it) => it.name)
                    .map((it) => {
                      return <li className={style.estilos_listas} key={it}>{it}</li>;
                    })}
              </ul>
            ) : (
              <ul>
                {gameId.generos &&
                  gameId.generos
                    .map((it) => Object.values(it))
                    .flat()
                    .map((it) => {
                      return <li className={style.estilos_listas} key={it}>{it}</li>;
                    })}
              </ul>
            )}
          </div>

          <div>
            {/* mapeo del campo plataformas */}
            {gameId.platforms ? (
              <ul>
                {gameId.platforms &&
                  gameId.platforms
                    .map((it) => it.platform.name)
                    .map((it) => {
                      return <li className={style.estilos_listas} key={it}>{it}</li>;
                    })}
              </ul>
            ) : (
              <ul>
                {gameId.plataformas &&
                  gameId.plataformas.split(",").map((it) => {
                    return <li className={style.estilos_listas} key={it}>{it}</li>;
                  })}
              </ul>
            )}
          </div>
         </div>

           <div className={style.container_btn}>

          <Link to="/home">
            <button className={style.btn}>VOLVER A HOME</button>
          </Link>
           </div>
        </div>
      </div>
     ) }
    </div>
  );
};

export default Detail;
