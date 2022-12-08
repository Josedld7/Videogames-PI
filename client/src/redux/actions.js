import axios from "axios";
import { mapeoGames } from "../helpers/helpers";

//loadings
export const loadingGames = () => {
  return {
    type: "LOADIGN_GAMES",
  };
};

export const loadingID = () => {
  return {
    type: "LOADING_ID",
  };
};

export const loadingName = () => {
  return {
    type: "LOADING_NAME",
  };
};
// llamados a rutas
export const getGames = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingGames());
      const res = await axios.get("/games");
      const mapInfo = mapeoGames(res.data);
      return dispatch({
        type: "GET_GAMES",
        payload: mapInfo,
      });
    } catch (error) {
      return { message: error.message };
    }
  };
};

export const getGeneros = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/generos");
      return dispatch({
        type: "GET_GENEROS",
        payload: res.data,
      });
    } catch (error) {
      return { message: error.message };
    }
  };
};

export const getByName = (nombre) => {
  return async (dispatch) => {
    try {
      dispatch(loadingName());
      const res = await axios.get("/?nombre=" + nombre);
      return dispatch({
        type: "GET_BY_NAME",
        payload: res.data,
      });
    } catch (error) {
      return { message: error.message };
    }
  };
};

export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch(loadingID());
      const res = await axios.get("/" + id);
      return dispatch({
        type: "GET_DETAIL",
        payload: res.data,
      });
    } catch (error) {
      return { message: error.message };
    }
  };
};

export const gameCreation = (payload) => {
  return async () => {
    try {
      const info = await axios.post("/create", payload);
      return info;
    } catch (error) {
      return { message: error.message };
    }
  };
};

//ordenamientos y filtros
export const ordenamientoAz = (payload) => {
  return {
    type: "ORDENAMIENTO_AZ",
    payload,
  };
};

export const ordenamientoMinMax = (payload) => {
  return {
    type: "ORDENAMIENTO_MINMAX",
    payload,
  };
};

export const filtradoPorCreacion = (payload) => {
  return {
    type: "FILTRADO_CREACION",
    payload,
  };
};

export const filtradoPorGeneros = (payload) => {
  return {
    type: "FILTRADO_GENEROS",
    payload,
  };
};

// limpieza
export const cleanDetail = () => {
  return {
    type: "CLEAN_DETAIL",
  };
};


