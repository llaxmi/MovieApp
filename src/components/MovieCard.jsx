import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <div className="detail">
        {movie.poster_path ? (
          <div className="image">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          </div>
        ) : (
          <div className="movie-poster">{movie.title}</div>
        )}
        <div className="movie_title_overlay">
          <Link className="detailLink" to={`/modal/${movie.id}`}>
            {movie.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
