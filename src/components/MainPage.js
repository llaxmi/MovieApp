import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import NavBar from "./NavBar";

const MainPage = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Function to fetch movie data
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${currentPage}&include_adult=false`
        );
        const data = await response.json();

        if (!data.errors) {
          setMovieData((prevMovies) => [...prevMovies, ...data.results]);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, [currentPage]);

  const loadMoreMovies = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  console.log(movieData);

  return (
    <div>
      <NavBar />
      <div className="container">
        {movieData.length > 0 && (
          <div>
            <ul className="movieCard">
              {movieData.map((movie, index) => (
                <li key={`movies_${movie.id}_${index}`}>
                  <MovieCard movie={movie} />
                </li>
              ))}
            </ul>
            <div
              style={{
                margin: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button onClick={loadMoreMovies} className="btn-watched">
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
