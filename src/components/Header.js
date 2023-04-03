import React from "react";
import "./Header.css";
import "./Mobile.css";

export default function Header({ onSelect, isCharLoaded, isLocLoaded }) {
  return (
    <div className="Header">
      <div
        className="container-header"
        onClick={(event) => (window.location.href = "/")}
      >
        <img
          className="rickandmorty-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
        />
      </div>
      <div className="header-buttons">
        {isCharLoaded ? (
          <button
            className="header-characters-button"
            onClick={() => onSelect(1)}
          >
            Characters
          </button>
        ) : (
          <></>
        )}
        {isLocLoaded ? (
          <button
            className="header-locations-button"
            onClick={() => onSelect(2)}
          >
            Locations
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
