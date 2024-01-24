import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import GlobalState from "./Context/GlobalState";
import Add from "./components/Add";
import MainPage from "./components/MainPage";
import MovieDetail from "./components/MovieDetail";
import Watchlist from "./components/WatchList";
import Watched from "./components/Watched";
const App = () => {
  return (
    <GlobalState>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} exact />
          <Route path="/watchlist" element={<Watchlist />} exact />
          <Route path="/watched" element={<Watched />} exact />
          <Route path="/add" element={<Add />} exact />
          <Route path="/modal/:id" element={<MovieDetail />} exact />
        </Routes>
      </Router>
    </GlobalState>
  );
};

export default App;
