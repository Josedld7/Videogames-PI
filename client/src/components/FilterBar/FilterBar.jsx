import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filtradoPorCreacion,
  filtradoPorGeneros,
  ordenamientoAz,
  ordenamientoMinMax,
} from "../../redux/actions";
import style from "./FilterBar.module.css";

const FilterBar = ({ setCurrentpage }) => {
  const generos = useSelector((state) => state.generos);
  const dispatch = useDispatch();

  const change1 = (e) => {
    dispatch(ordenamientoAz(e.target.value));
    setCurrentpage(1);
  };

  const change2 = (e) => {
    dispatch(ordenamientoMinMax(e.target.value));
    setCurrentpage(1);
  };

  const change3 = (e) => {
    dispatch(filtradoPorCreacion(e.target.value));
    setCurrentpage(1);
  };

  const change4 = (e) => {
    dispatch(filtradoPorGeneros(e.target.value));
    setCurrentpage(1);
  };

  return (
    <div className={style.container_principal}>
      <div className={style.container}>
        {/* ascendente o descendente */}
        <div className={style.container_selects}>
          <select
            className={style.one_selects}
            onChange={change1}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Filtrar por orden alfabetico
            </option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>

        {/* rating menor a mayor y viceversa */}
        <div className={style.container_selects}>
          <select
            className={style.one_selects}
            onChange={change2}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Filtrar por rating
            </option>
            <option value="min">Menor a mayor</option>
            <option value="max">Mayor a menor</option>
          </select>
        </div>

        {/* existentes o creados */}
        <div className={style.container_selects}>
          <select
            className={style.one_selects}
            onChange={change3}
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Filtrar por origen
            </option>
            <option value="Todos">Todos los juegos</option>
            <option value="Existentes">Preexistentes</option>
            <option value="Creados">Creados </option>
          </select>
        </div>

        {/* selectores de genero */}
        <div className={style.container_selects}>
          <select className={style.one_selects} onChange={change4}>
            {generos &&
              generos.map((item) => {
                return (
                  <option key={item.id} value={item.nombre}>
                    {item.nombre}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
