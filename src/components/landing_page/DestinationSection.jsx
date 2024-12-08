import React from "react";
import CategorySlider from "./CategorySlider";
import "./DestinationSection.css";

const DestinationSection = () => {
  const categories = [
    { title: "Touristic Cities", destinations: ["CFC Tower Casablanca"] },
    { title: "Natural Spots", destinations: ["Akchour Waterfalls"] },
    { title: "Historical Spots", destinations: ["Université Al Quaraouiyine"] },
    { title: "Sahara", destinations: ["Merzouga Desert"] },
    { title: "Souks", destinations: ["Place Jamaa El Fna"] },
    { title: "Artistical Spots", destinations: ["Blue city Tetouan"] },
  ];

  return (
    <div className="destination-section">
      <h2>Choose Your Next Destination</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <CategorySlider
            key={index}
            title={category.title}
            destinations={category.destinations}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationSection;
