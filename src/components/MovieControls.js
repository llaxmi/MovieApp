import React, { useContext, useState } from "react";
import GlobalContext from "../Context/GlobalContext";

import { faEye as farEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MovieControls = ({ type, movie }) => {
  const { removeFromWatched, removeFromWatchlist } = useContext(GlobalContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <button
          className="ctrl-btn"
          onClick={() => removeFromWatchlist(movie.id)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="remove_container">
            <p className="remove">Remove from watchlist</p>
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ fontSize: "16px", marginTop: "14px" }}
            />
          </div>
        </button>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => removeFromWatched(movie.id)}
          >
            <div className="remove_container">
              <p className="remove">Remove from watched</p>
              <FontAwesomeIcon
                icon={isHovered ? faEyeSlash : farEye}
                style={{ fontSize: "16px", marginTop: "14px" }}
              />
            </div>
          </button>
        </>
      )}
    </div>
  );
};
