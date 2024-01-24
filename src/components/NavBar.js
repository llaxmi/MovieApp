import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Cinemate</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watchlist">WatchList</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add">Search</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
