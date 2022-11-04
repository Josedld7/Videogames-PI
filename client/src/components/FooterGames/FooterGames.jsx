import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const FooterGames = () => {
  return (
    <footer className={style.container}>
      <div className={style.container_link}>
        <div className={style.responsive}>
          <Link to="/create" className={style.link}>
            <div>
              <i class="fa-solid fa-table-list"></i>
            </div>
            <div>
              <p>Crear juego</p>
            </div>
          </Link>
        </div>

        <div className={style.responsive}>
          <a
            href="https://www.xbox.com/es-CO/games/crossfirex"
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >
            <div>
              <i class="fa-brands fa-xbox"></i>
            </div>

            <div>
              <p>Xbox</p>
            </div>
          </a>
        </div>

        <div className={style.responsive}>
          <a
            a
            href="https://www.playstation.com/es-co/"
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >
            <div>
              <i class="fa-brands fa-playstation"></i>
            </div>

            <div>
              <p>Play station</p>
            </div>
          </a>
        </div>

        <div className={style.responsive}>
          <a
            href="https://www.nintendo.com/es-co/switch/"
            target="_blank"
            rel="noreferrer"
            className={style.link}
          >
            <div>
              <i class="fa-solid fa-gamepad"></i>
            </div>
            <div>
              <p>Nintendo</p>
            </div>
          </a>
        </div>
      </div>

      <div className={style.container_copy}>
        <div className={style.copy}>
          <i class="fa-regular fa-copyright"></i>
        </div>
        <div className={style.copy_description}>
          <p>Todos los derechos reservados. </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterGames;
