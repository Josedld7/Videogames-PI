import React from "react";
import { Link} from "react-router-dom";
import style from "./Cards.module.css";

const Cards = ({ gamePagination }) => {
  return (
    <div className={style.container_principal}>
      <div className={style.container_grid}>
        {gamePagination &&
          gamePagination.map((item) => {
            return (
              <div key={item.nombre} className={style.grid_items}>
                {/* imagen */}
                <div className={style.container_image}>
                  <Link to={`/buscar/${item.id}`}>
                    <img
                      className={style.card_image}
                      src={item.imagen}
                      alt={item.nombre}
                      width="150"
                      height="150"
                    />
                  </Link>

                  {/* nombre */}
                  <div className={style.container_title}>
                    <Link  to={`/buscar/${item.id}`} className={style.link}>
                      <h3 className={style.title}>{item.nombre}</h3>
                    </Link>
                  </div>
                </div>

                <div className={style.container_info}>
                  {/* generos */}
                  <ul className={style.container_generos}>
                    {item.generos &&
                      item.generos
                        .map((it) => {
                          return (
                            <li className={style.generos} key={it}>
                              {it}
                            </li>
                          );
                        })
                        .slice(0, 3)}
                  </ul>

                  {/* rating */}
                  <div className={style.container_rating}>
                    <p className={style.rating}> {item.rating} </p>
                  </div>
                </div>
                <Link to={`/buscar/${item.id}`} className={style.link}>
                  <div className={style.container_btn}>
                    <button className={style.btn}>Ver mas</button>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
