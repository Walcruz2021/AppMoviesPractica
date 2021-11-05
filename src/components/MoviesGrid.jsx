import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Abaut } from "./Abaut";

import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
// import { Spinner } from "./Spinner";
// import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "./Empty";

import { Paginado } from "./cssPaginado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faAngleDoubleLeft,
} from "@fortawesome/free-solid-svg-icons";

export function MoviesGrid({ search }) {
  const [movies, setMovies] = useState([]);
  console.log(movies, "----");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  /////////////////***PAGINADO****//////////////////////////

  const recipesPerPag = 9;
  const cantPaginas = Math.ceil(movies.length / recipesPerPag);
  //console.log(limite)
  const [currentPage, setCurrentPage] = useState(0);
  const [pagAct, setPagAct] = useState(1);
  const getFilter = () => {
    return movies.slice(currentPage, currentPage + recipesPerPag);
  };

  const handlePrev = () => {
    if (pagAct > 1) {
      setCurrentPage(currentPage - recipesPerPag);
      setPagAct(pagAct - 1);
    }
  };

  const handleNext = () => {
    if (pagAct >= 1 && pagAct < cantPaginas) {
      setCurrentPage(currentPage + recipesPerPag);
      setPagAct(pagAct + 1);
    }
  };
  ////////////////////****************//////////////////////////

  // useEffect(() => {
  // get ("/discover/movie").then((data)=>{
  //   setMovies(data.results);
  // });
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });
  }, [search, page]);

  if (!isLoading && movies.length === 0) {
    return <Empty />;
  }


  return (
    <>
     <div>
      <Paginado>
        <FontAwesomeIcon
          onClick={() => handlePrev()}
          icon={faAngleDoubleLeft}
          size="lg"
          style={{ cursor: "pointer" }}
        ></FontAwesomeIcon>
        {/* <button class="btnPag"  id="1"  onClick={handlePrev}><i class="fal fa-chevron-double-right"></i></button>  */}
        <span> </span>
        <span>
          {pagAct} de {cantPaginas}
        </span>
        {/* <button class="btnPag" onClick={handleNext}>next</button> */}
        <span> </span>
        <FontAwesomeIcon
          onClick={() => handleNext()}
          icon={faAngleDoubleRight}
          size="lg"
          style={{ cursor: "pointer" }}
        ></FontAwesomeIcon>
      </Paginado>

      <ul className={styles.moviesGrid}>
        {getFilter().map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
</div>
      <Abaut />
    </>
  );
}
