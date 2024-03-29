import React, { useState } from "react";

import NavBar from "./NavBar";
import ResultCard from "./ResultCard";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    event.preventDefault();
    //update with input value
    setQuery(event.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_KEY
      }&language=en-US&page=1&include_adult=false&query=${event.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {query && results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
          {query && results.length === 0 && (
            <p> No movies found of name "{query}"</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Add;
