import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DestinationHeader from "./DestinationHeader";
import DestinationMap from "./DestinationMap";
import DestinationActivities from "./DestinationActivities";
import DestinationAccommodations from "./DestinationAccommodations";
import "./DestinationPage.css";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";

const DestinationPage = () => {
  const location = useLocation();
  const { destination } = location.state; // Passed from FormPage
  const [destinationData, setDestinationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinationData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/destinations");
        const destinations = response.data;
        const matchedData = destinations.find((d) => d.destination === destination);

        if (matchedData) {
          setDestinationData(matchedData);
        } else {
          setError("Destination not found.");
        }
      } catch (err) {
        setError(`Error fetching destination: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinationData();
  }, [destination]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    
    <div className="destination-page">
      <Navbar/>
      <DestinationHeader
        title={`Welcome to ${destinationData.destination}`}
        bannerImage={destinationData.bannerImage}
      />
      
      {/* Other sections */}
      <DestinationMap destination={destination} />

    
      <DestinationActivities activities={destinationData.activities} />
      <DestinationAccommodations accommodations={destinationData.accommodations} />
    {/*<DestinationMap mapPoints={destinationData.mapPoints} />
      <DestinationActivities activities={destinationData.activities} />
     />*/}
    <Footer/>
    </div>
    
  );
};

export default DestinationPage;
