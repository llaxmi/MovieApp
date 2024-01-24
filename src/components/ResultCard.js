import React, { useContext, useState } from "react";
import GlobalContext from "../Context/GlobalContext";

const ResultCard = ({ movie }) => {
  const { addToWatchlist, addToWatched } = useContext(GlobalContext);
  const [selectedAction, setSelectedAction] = useState(false);

  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
    setSelectedAction("watchlist");
  };

  const handleAddToWatched = () => {
    addToWatched(movie);
    setSelectedAction("watched");
  };

  return (
    <div className="result-card">
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>

        <div className="info">
          <div className="header details">
            <div>
              <h3 className="title">{movie.title}</h3>
              <h4 className="release-date">
                {movie.release_date.substring(0, 4)}
              </h4>
            </div>

            <div className="controls">
              <button
                className="btn"
                onClick={handleAddToWatchlist}
                disabled={selectedAction === "watchlist"}
              >
                Add to watchlist
              </button>
              <button
                className="btn-watched"
                onClick={handleAddToWatched}
                disabled={selectedAction === "watched"}
              >
                Add to Watched
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
