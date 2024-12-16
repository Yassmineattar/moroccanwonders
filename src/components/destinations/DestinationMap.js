import React from "react";
import "./DestinationMap.css";

const DestinationMap = ({ mapPoints }) => {
  return (
    <div className="destination-map">
      <h3>Explore Key Locations</h3>
      <div className="map-points">
        {mapPoints.map((point, index) => (
          <div key={index} className="map-point">
            {point}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationMap;
