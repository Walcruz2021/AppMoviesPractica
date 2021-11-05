import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getMovieImg } from "../utils/getMovieImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

export function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path, 300);
    
  var cantEst=(cant)=>{
    const array=[];
      for(var i=1;i<=cant;i++){
        array.push(i);
      }
      return array;
} 

  var result = cantEst(movie.vote_average) 
  console.log(result) 

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        {/* <div>{movie.vote_average}</div> */}
        {/* {movie.vote_average?movie.vote_average.map(mov)}
        <FontAwesomeIcon icon={faStar} size="1x"></FontAwesomeIcon>
         */}
        <div>{movie.title}</div>
      {cantEst(movie.vote_average).map((e)=>{
        return (<span> <FontAwesomeIcon icon={faStar} size="1x"></FontAwesomeIcon></span>)
      })}
      </Link>
    </li>
  );
}
