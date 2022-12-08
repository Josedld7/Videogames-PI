import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGeneros } from "../../redux/actions";
import HeaderGames from "../../components/HeaderGames/HeaderGames";
import MainGames from "../../components/MainGames/MainGames";
import FooterGames from "../../components/FooterGames/FooterGames";
import FilterBar from "../../components/FilterBar/FilterBar";
import style from "./Home.module.css";
import LoadingGames from "../../components/LoadingGames/LoadingGames";
import NoFoundGame from "../../components/NoFoundGame/NoFoundGame";

const Home = () => {
  //estados de redux:
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const loadingGames = useSelector((state) => state.loadingGames);
  const loadingNames = useSelector((state) => state.loadingNames);
  // estados locales para paginado:
  const [currentPage, setCurrentpage] = useState(1);
  const [gamePerPage] = useState(15);
  const lastGame = currentPage * gamePerPage; //15
  const firstGame = lastGame - gamePerPage; // 0
  const gamePagination = games.slice(firstGame, lastGame);
  const paginate = (number) => setCurrentpage(number);

  useEffect(() => {
    dispatch(getGames());
    dispatch(getGeneros());
  }, [dispatch]);

  const recargarPage = () => {
    setCurrentpage(1);
    dispatch(getGames());
  };

  return (
    <div className={style.container}>
      {loadingGames ? (
        <LoadingGames />
      ) : (
        <div>
          <div className={style.container_header}>
            <HeaderGames
              recargarPage={recargarPage}
              setCurrentpage={setCurrentpage}
            />
          </div>

          <div className={style.container_main}>
            <FilterBar setCurrentpage={setCurrentpage} />
            {loadingNames ? (
              <LoadingGames />
            ) : games.length === 0 ? (
              <NoFoundGame />
            ) : (
              <div>
                <MainGames
                  games={games}
                  gamePerPage={gamePerPage}
                  paginate={paginate}
                  gamePagination={gamePagination}
                />
              </div>
            )}
          </div>

          <div className={style.container_footer}>
            <FooterGames />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
