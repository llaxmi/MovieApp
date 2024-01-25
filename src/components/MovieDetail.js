import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState();
  const [isLoading, setIsLoading] = useState(true);
  //get movie ID from route params
  const params = useParams();

  useEffect(() => {
    // Function to fetch movie data
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
        );
        const data = await response.json();
        //check for errors in API response
        if (!data.errors) {
          setMovieDetail(data);
        }
      } catch (error) {
        console.error("Error fetching movie Detail:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [params.id]);

  // If no movie ID is present in the route parameters, return null
  if (!params.id) {
    return null;
  }

  return (
    <>
      <NavBar />
      <div className="container">
        <Link to="/main">
          <p className="back">
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: "20px", color: "black" }}
            />
          </p>
        </Link>
        <div className="modal">
          {isLoading || !movieDetail ? (
            <h2 style={{ textAlign: "center", display: "flex" }}>Loading...</h2>
          ) : (
            <>
              {movieDetail.poster_path ? (
                <div className="image">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movieDetail.poster_path}`}
                    alt={`${movieDetail.title} Poster`}
                  />
                </div>
              ) : (
                <div className="movie_poster" />
              )}

              <div className="movieDetails">
                Movie: {movieDetail.title}
                <p>Released on: {movieDetail.release_date}</p>
                <p>Duration: {movieDetail.runtime} mins</p>
                <p>Overview: {movieDetail.overview}</p>
                <p>Status: {movieDetail.status}</p>
                <p>Vote: {movieDetail.vote_average}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
