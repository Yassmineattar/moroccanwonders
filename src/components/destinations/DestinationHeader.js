import React from "react";
import "./DestinationHeader.css";

const DestinationHeader = ({ title, subtitle, bannerImage }) => {
  return (
    <div
      className="destination-header"
      style={{ backgroundImage: `url(${bannerImage})` }} // Set image as background
    >
      {/* Overlay for darkening effect */}
      <div className="destination-header-overlay">
        <h1 className="destination-title">{title}</h1>
        <h2 className="destination-subtitle">{subtitle}</h2>
        <p className="destination-description">
          Embark on Your Perfect Moroccan Journey! <br />
          Discover the ultimate itinerary crafted just for you.
        </p>
      </div>
    </div>
  );
};

export default DestinationHeader;
