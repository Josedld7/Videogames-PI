import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { gameCreation, getGeneros } from "../../redux/actions";
import { validate } from "../../helpers/helpers";
import style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const generos = useSelector((state) => state.generos);
  const [input, setInput] = useState({
    nombre: "",
    descripcion: "",
    lanzamiento: "",
    rating: "",
    plataformas: "",
    imagen: "",
    generos: [],
  });
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(getGeneros());
  }, [dispatch]);

  //captura del valor de los input y validacion:
  const hadleChangeForm = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  //captura el valor de los generos:
  const handleSelect = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      generos: [...input.generos, e.target.value],
    });
  };

  // envia el formulario, setea el estado y redirecciona:
  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(gameCreation(input));
    alert("Tu juego ha sido creado");
    setInput({
      nombre: "",
      descripcion: "",
      lanzamiento: "",
      rating: "",
      plataformas: "",
      imagen: "",
      generos: [],
    });
    history.push("/home");
  };

  return (
    <div className={style.container}>
      <div className={style.container_btn_home}>
        <Link to="/home">
          <button className={style.btn_home} type="submit">
            Back to home{" "}
          </button>
        </Link>
      </div>

      <div className={style.flex}>
        <div className={style.container_form}>
          <form onSubmit={handleSubmitForm} >
            <h1 className={style.title}>Crea tu juego, lest go!!!</h1>

            <div>
              <input
                className={style.input}
                onChange={hadleChangeForm}
                type="text"
                value={input.nombre}
                name="nombre"
                autoComplete="off"
                placeholder="Nombre"
                required
              />
            </div>

            <div>{input.nombre && <p className={style.error}>{error.nombre}</p>}</div>

            <div>
              <input
                className={style.input}
                onChange={hadleChangeForm}
                type="text"
                value={input.descripcion}
                name="descripcion"
                autoComplete="off"
                placeholder="Descripcion del juego"
                required
              />
            </div>

            <div>{input.descripcion && <p className={style.error}>{error.descripcion}</p>}</div>

            <div>
              <input
                className={style.input}
                onChange={hadleChangeForm}
                type="text"
                value={input.lanzamiento}
                name="lanzamiento"
                autoComplete="off"
                placeholder="Fecha de lanzamiento"
                required
              />
            </div>

            <div>{input.lanzamiento && <p className={style.error} >{error.lanzamiento}</p>}</div>

            <div>
              <input
                className={style.input}
                onChange={hadleChangeForm}
                type="text"
                value={input.rating}
                name="rating"
                autoComplete="off"
                placeholder="Rating del juego"
                required
              />
            </div>

            <div>{input.rating && <p className={style.error} >{error.rating}</p>}</div>

            <div>
              <input
                className={style.input}
                onChange={hadleChangeForm}
                type="text"
                value={input.plataformas}
                name="plataformas"
                autoComplete="off"
                placeholder="Plataformas del juego"
                required
              />
            </div>

            <div>{input.plataformas && <p className={style.error}>{error.plataformas}</p>}</div>

            <div>
              <input
                className={style.input}
                onChange={hadleChangeForm}
                type="text"
                value={input.imagen}
                name="imagen"
                autoComplete="off"
                placeholder="Url"
                required
              />
            </div>

            <div>{input.imagen && <p className={style.error}>{error.imagen}</p>}</div>

            <div className={style.container_genero_btn}>
              <div>
                {
                  <select onChange={handleSelect} className={style.selector}>
                    {generos &&
                      generos.map((item) => {
                        return (
                          <option key={item.id} value={item.nombre}>
                            {item.nombre}
                          </option>
                        );
                      })}
                  </select>
                }
              </div>

              <div>
                <button className={style.btn} type="submit">
                  Crear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* <div>
        <ul>
          {input.generos.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default Form;
