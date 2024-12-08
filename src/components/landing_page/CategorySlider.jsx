import React from "react";
import DestinationCard from "./DestinationCard";
import "./CategorySlider.css";

const CategorySlider = ({ title, destinations }) => {
  return (
    <div className="category-slider">
      <h3>{title}</h3>
      <div className="slider">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} title={destination} />
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
