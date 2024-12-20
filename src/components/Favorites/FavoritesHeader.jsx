import React from "react";
import "./FavoritesHeader.css";

const FavoritesHeader = () => {
  return (
    <div className="favorites-header">
      <div className="favorites-header-content">
        <h1 className="favorites-title">Your Favorites</h1>
        <p className="favorites-subtitle">
          Explore all your favorite destinations and hotels in one place!
        </p>
      </div>
    </div>
  );
};

export default FavoritesHeader;
