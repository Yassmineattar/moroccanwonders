import React from "react";
import "./DestinationAccommodations.css";

const DestinationAccommodations = ({ accommodations }) => {
  return (
    <div className="destination-accommodations">
      <h3 className="accommodations-title">Where to Stay?</h3>
      <div className="accommodations-list">
        {accommodations.map((accommodation, index) => (
          <div key={index} className="accommodation-card">
            <div className="staggered-images">
              <img
                src={accommodation.image1}
                alt={`${accommodation.name} Image 1`}
                className="image1"
              />
              <img
                src={accommodation.image2}
                alt={`${accommodation.name} Image 2`}
                className="image2"
              />
              <img
                src={accommodation.image3}
                alt={`${accommodation.name} Image 3`}
                className="image3"
              />
            </div>
            <div className="accommodation-details">
              <h4 className="accommodation-name">{accommodation.name}</h4>
              <p className="accommodation-description">{accommodation.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationAccommodations;
