import React, { useContext } from "react";

import GlobalContext from "../Context/GlobalContext";
import NavBar from "./NavBar";
import PickedMovie from "./PickedMovie";

const Watched = () => {
  //accessing watched state from GlobalContext
  const { watched } = useContext(GlobalContext);

  return (
    <div>
      <NavBar />
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watched list</h1>
            <span className="count-pill">
              {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
          {watched.length > 0 ? (
            <div className="movie-grid">
              {watched.map((movie) => (
                <PickedMovie movie={movie} key={movie.id} type="watched" />
              ))}
            </div>
          ) : (
            <h2 className="no-movies">No movies in your list! Add some.</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watched;
