import React, { useState } from "react";
import "./DestinationCard.css";

const DestinationCard = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="destination-card">
      <div className="card-image">
        <img
          src={`https://via.placeholder.com/300x200?text=${title}`}
          alt={title}
        />
      </div>
      <div className="card-content">
        <h4>{title}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam.
        </p>
        <div className="card-actions">
          <button className="favorite-btn" onClick={toggleFavorite}>
            {isFavorite ? "♥" : "♡"}
          </button>
          <button className="discover-btn">Discover more</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
