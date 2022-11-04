import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <section className={style.container_nav}>
        <div>
          <h3 className={style.nav_title}>Games.</h3>
        </div>

        <a
          className={style.nav_btn_link}
          href="https://rawg.io/apidocs"
          target="_blank"
          rel="noreferrer"
        >
          <div className={style.nav_btn}>
            <p>Api Rawg</p>
          </div>
        </a>
      </section>

      <section className={style.container_info}>
        <div className={style.info_flex}>
          <h1 className={style.title}>Encuentra tu juego favorito</h1>
          <h2 className={style.subtitle}>Navega y disfruta.</h2>
          <p className={style.paragraph}>Tenemos todos los juegos.</p>

          <Link to="/home">
            <button className={style.btn}>Go Home</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
