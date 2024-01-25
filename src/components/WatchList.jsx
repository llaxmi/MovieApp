import { Navigate } from "react-router-dom";
import { useMovieContext } from "../Context/GlobalContext";
import NavBar from "./NavBar";
import PickedMovie from "./PickedMovie";

const WatchList = () => {
  const { watchlist } = useMovieContext();

  if (!watchlist) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <div>
      <NavBar />
      <div className="movie-page">
        <div className="container">
          <div className="header">
            <h1 className="heading">Watchlist</h1>

            <span className="count-pill">
              {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
            </span>
          </div>
          {watchlist.length > 0 ? (
            <div className="movie-grid">
              {watchlist.map((movie) => (
                <PickedMovie
                  movie={movie}
                  key={`movie_${movie.id}`}
                  type="watchlist"
                />
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

export default WatchList;
