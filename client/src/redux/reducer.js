import {
  GET_GAMES,
  GET_GENEROS,
  GET_BY_NAME,
  ORDENAMIENTO_AZ,
  ORDENAMIENTO_MINMAX,
  FILTRADO_CREACION,
  FILTRADO_GENEROS,
  LOADIGN_GAMES,
  LOADING_ID,
  CREATION_GAMES,
  GET_DETAIL,
  CLEAN_DETAIL,
  LOADING_NAME,
} from "./types";

const initialState = {
  games: [],
  games2: [],
  games3: [],
  games4: [],
  generos: [],
  detail: {},
  loadingGames: false,
  loadingId: false,
  loadingName: false,
  darkMode: false,
};

const RootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADIGN_GAMES:
      return {
        ...state,
        loadingGames: true,
      };
    case LOADING_ID:
      return {
        ...state,
        loadingId: true,
      };
    case LOADING_NAME:
      return {
        ...state,
        loadingName: true,
      };
    case CREATION_GAMES:
      return {
        ...state,
      };
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
        games2: action.payload,
        games3: action.payload,
        games4: action.payload,
        loadingGames: false,
      };
    case GET_GENEROS:
      return {
        ...state,
        generos: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
        loadingId: false,
      };
    case GET_BY_NAME:
      return {
        ...state,
        games: action.payload,
        loadingName: false,
      };
    case ORDENAMIENTO_AZ:
      const ordenAz = state.games;
      const newOrdenAz =
        action.payload === "asc"
          ? ordenAz.sort((a, b) => {
              if (a.nombre > b.nombre) {
                return 1;
              }
              if (b.nombre > a.nombre) {
                return -1;
              }
              return 0;
            })
          : ordenAz.sort((a, b) => {
              if (a.nombre > b.nombre) {
                return -1;
              }
              if (b.nombre > a.nombre) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        games: [...newOrdenAz],
      };
    case ORDENAMIENTO_MINMAX:
      const ordenMinMax = state.games;
      const newOrdenMinMax =
        action.payload === "min"
          ? ordenMinMax.sort((a, b) => a.rating - b.rating)
          : ordenMinMax.sort((a, b) => b.rating - a.rating);

      return {
        ...state,
        games: [...newOrdenMinMax],
      };
    case FILTRADO_CREACION:
      const filtradoPorCreacion =
        action.payload === "Creados"
          ? state.games2.filter((it) => it.createInDb)
          : state.games2.filter((it) => !it.createInDb);
      return {
        ...state,
        games:
          action.payload === "Todos"
            ? state.games2
            : filtradoPorCreacion.length === 0
            ? state.games2
            : filtradoPorCreacion,
      };
    case FILTRADO_GENEROS:
      const filtradoPorGenero = state.games3.filter((item) =>
        item.generos.includes(action.payload)
      );
      return {
        ...state,
        games:
          filtradoPorGenero.length === 0 ? state.games3 : filtradoPorGenero,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        detail: {},
      };

    default:
      return state;
  }
};

export default RootReducer;
