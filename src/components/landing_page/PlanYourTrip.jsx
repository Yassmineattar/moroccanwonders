import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./PlanYourTrip.css";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const PlanYourTrip = () => {
  const [showMap, setShowMap] = useState(false); // État pour afficher ou masquer la carte

  const center = [31.7917, -7.0926]; // Center of Morocco
  const markers = [
    { id: 1, name: "Marrakech", position: [31.63, -8.01] },
    { id: 2, name: "Rabat", position: [34.02, -6.84] },
    { id: 3, name: "Fes", position: [34.0331, -5.0003] },
    { id: 4, name: "Casablanca", position: [33.5731, -7.5898] },
    { id: 5, name: "Chefchaouen", position: [35.1700, -5.2647] },
    { id: 6, name: "Merzouga", position: [31.1200, -4.0000] },
  ];

  return (
    <section className="plan-your-trip">
      <div className="content">
        <h2>Plan Your Trip</h2>
        <br />
        <p>
          "Not sure where to go? Fill in your preferences or let the map decide
          your next Moroccan adventure!"
        </p>
        <br />
        <div className="buttons">
          <Link to="/plan">
            <button className="start-now">Start Now</button>
          </Link>
          <button
            className="choose-map"
            onClick={() => setShowMap(!showMap)} // Basculer l'affichage de la carte
          >
            Choose in the map
          </button>
        </div>
      </div>
      {showMap && ( // Affiche la carte uniquement si showMap est true
        <div className="map-container">
          <MapContainer
            center={center}
            zoom={6}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker) => (
              <Marker key={marker.id} position={marker.position}>
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      )}
    </section>
  );
};

export default PlanYourTrip;
