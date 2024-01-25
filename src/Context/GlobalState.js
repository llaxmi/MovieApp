import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {
  //state to manage the watchlist and watched movie lists
  const [watchlist, setWatchlist] = useState([]);
  const [watched, setWatched] = useState([]);

  //function to save data to localStorage
  const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
    const storedWatched = JSON.parse(localStorage.getItem("watched"));

    if (storedWatched) {
      setWatched(storedWatched);
    }
    if (storedWatchlist) {
      setWatchlist(storedWatchlist);
    }
  }, []);

  //function to add and remove a movie from the watch list respectively
  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => {
      const updatedWatchlist = [...prevWatchlist, movie];
      saveToLocalStorage("watchlist", updatedWatchlist);
      return updatedWatchlist;
    });
  };
  const removeFromWatchlist = (movieId) => {
    const updatedWatchlist = watchlist.filter((movie) => movie.id !== movieId);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  };

  //function to add and remove a movie from the watchedlist respectively

  const addToWatched = (movie) => {
    setWatched((prevWatched) => {
      const updatedWatchedList = [...prevWatched, movie];
      saveToLocalStorage("watched", updatedWatchedList);
      return updatedWatchedList;
    });
  };
  const removeFromWatched = (movieId) => {
    const updatedWatchedList = watched.filter((movie) => movie.id !== movieId);
    setWatched(updatedWatchedList);
    localStorage.setItem("watched", JSON.stringify(updatedWatchedList));
  };

  const contextValue = {
    watchlist,
    watched,
    addToWatchlist,
    addToWatched,
    removeFromWatched,
    removeFromWatchlist,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
