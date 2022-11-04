import React from "react";
import Pagination from "../Pagination/Pagination";
import LoadingGames from "../LoadingGames/LoadingGames";
import Cards from "../Cards/Cards";
import { useSelector } from "react-redux";
import style from './MainGames.module.css'


const MainGames = ({ games, gamePerPage, paginate, gamePagination }) => {
  const loadinGames = useSelector((state) => state.loadingGames);
  const loadingName = useSelector((state) => state.loadingName);


  return (
    <main className={style.container_main}>
      <div >
        {loadingName ? null : (
          <Pagination
            games={games.length}
            gamePerpage={gamePerPage}
            paginate={paginate}
            loadinGames={loadinGames}
          />
        )}

        {loadinGames ? (
          <LoadingGames />
        ) : loadingName ? (
          <LoadingGames />
        ) : (
          <Cards gamePagination={gamePagination} />
        )}

        {loadingName ? null : (
          <Pagination
            games={games.length}
            gamePerpage={gamePerPage}
            paginate={paginate}
            loadinGames={loadinGames}
          />
        )}
      </div>
    </main>
  );
};

export default MainGames;
