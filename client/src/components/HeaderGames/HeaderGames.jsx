import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./HeaderGames.module.css";

const HeaderGames = ({ recargarPage }) => {
  return (
    <header className={style.container}>
      <div>
        <h2 className={style.text_logo2}>Video Games App.</h2>
      </div>

      <div className={style.container_elements}>
        <div>
          <h2 className={style.text_logo}>Video Games App.</h2>
        </div>

        <div>
          <SearchBar />
        </div>

        <div className={style.container_btns}>
          <div className={style.container_btn_crear}>
            <Link to="/create">
              <button className={style.btns}>Crear Juego</button>
            </Link>
          </div>

          <div>
            <button className={style.btns} onClick={recargarPage}>
              Recargar
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderGames;
