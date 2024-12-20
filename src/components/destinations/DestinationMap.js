import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./DestinationMap.css";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// Mock JSON Data
const mockData = [
  {
    destination: "Essaouira",
    description: "Essaouira, the windy city, is famous for its beautiful beaches...",
    position: [31.5085, -9.7582],
  },
  {
    destination: "Fes",
    description: "Fes, the spiritual heart of Morocco, is known for its labyrinthine medina...",
    position: [34.0331, -5.0003],
  },
  {
    destination: "Merzouga",
    description: "Merzouga, located on the edge of the Sahara Desert...",
    position: [31.1200, -4.0000],
  },
];

const DestinationMap = ({ destination }) => {
  const [mapPoint, setMapPoint] = useState(null);

  useEffect(() => {
    // Find the specific destination from the mock data
    const matchedDestination = mockData.find((item) => item.destination === destination);
    if (matchedDestination) {
      setMapPoint({
        position: matchedDestination.position,
        description: matchedDestination.description,
      });
    }
  }, [destination]);

  const defaultCenter = [31.7917, -7.0926];
  const defaultZoom = 6;

  return (
    <div className="destination-map">
      <h3 className="map-title">Explore {destination}</h3>
      <MapContainer
        center={mapPoint ? mapPoint.position : defaultCenter}
        zoom={mapPoint ? 8 : defaultZoom}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {mapPoint && (
          <Marker position={mapPoint.position}>
            <Popup>
              <strong>{destination}</strong>
              <br />
              {mapPoint.description}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
};

export default DestinationMap;
