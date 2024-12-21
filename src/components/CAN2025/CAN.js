import React, { useState } from "react";
import './CAN.css';  
 

const canInfo = {
  title: "CAN 2025 in Morocco",
  description:
    "The Africa Cup of Nations (CAN) 2025 will be hosted by Morocco, featuring the best teams in African football. This prestigious tournament will showcase high-quality football and bring fans together from all over the continent.",
  dates: "June 2025 - July 2025",
};

const stadiums = [
  {
    name: "Stade Mohammed V Casablanca",
    city: "Casablanca",
    capacity: "67,000",
    image: "https://www.casa-amenagement.ma/uploads/gallery/travaux-du-complexe-med-v/DJI_0145.JPG",
  },
  {
    name: "Stade de Marrakech",
    city: "Marrakech",
    capacity: "45,000",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Stade_de_marrakech.jpg",
  },
  {
    name: "Stade de Tanger",
    city: "Tanger",
    capacity: "50,000",
    image: "https://www.anep.ma/sites/default/files/styles/medium_750_620_/public/2023-09/stade_de_tanger_650.jpg?itok=MJBb_WG8",
  },
];

const itineraries = {
  Tanger: [
    {
      title: "Explore the Kasbah",
      description: "Visit the historic Kasbah of Tanger with its panoramic views of the Mediterranean.",
      image: "https://i.pinimg.com/originals/ef/c2/5a/efc25ac7587f3e3caaf22bb6efdfa551.jpg",
    },
    {
      title: "Relax at the Beach",
      description: "Enjoy the sunny beaches of Tanger, known for their beautiful golden sands and clear waters.",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0c/5c/02/0c/the-beach-at-early-morning.jpg",
    },
    {
      title: "Visit the American Legation Museum",
      description: "Discover the rich history of the U.S.-Morocco relations at this historical site.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWTFXCHijk78jybmhhk5_tV1U9UGwO5H3cVg&s",
    },
  ],
  Casablanca: [
    {
      title: "Visit Hassan II Mosque",
      description: "Explore one of the largest mosques in the world, located by the sea in Casablanca.",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/4d/c3/07/ii.jpg?w=1200&h=-1&s=1",
    },
    {
      title: "Explore the Medina",
      description: "Walk through the vibrant streets of Casablanca's old Medina, filled with shops and history.",
      image: "https://archive.challenge.ma/wp-content/uploads/2016/02/Artisanat-marocain.jpg",
    },
  ],
  Marrakech: [
    {
      title: "Visit Jardin Majorelle",
      description: "Explore the stunning botanical garden designed by Yves Saint Laurent.",
      image: "https://www.ilove-marrakech.com/blog/wp-content/uploads/2024/07/What-Makes-Jardin-Majorelle-in-Marrakech-So-Unique.png", // Remplacer par une image réelle
    },
    {
      title: "Explore the Medina of Marrakech",
      description: "Walk through the vibrant streets of Marrakech's old Medina, filled with shops, markets, and history.",
      image: "https://www.clickexcursions.com/storage/excursions/April2020/vHGasZOHZ51r8aZaxN8C.jpg", // Remplacer par une image réelle
    },
    {
      title: "Visit the Koutoubia Mosque",
      description: "Discover the beautiful Koutoubia Mosque, one of the largest in Morocco.",
      image: "https://cdn.getyourguide.com/img/location/5cf67dbfcdb6e.jpeg/99.jpg", // Remplacer par une image réelle
    },
    {
      title: "Shopping at Souks",
      description: "Experience the bustling markets and buy traditional Moroccan goods like textiles and pottery.",
      image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/13/e4/a7/f7.jpg", // Remplacer par une image réelle
    },
    {
      title: "Dining at Le Jardin Restaurant",
      description: "Enjoy delicious Moroccan cuisine in a beautiful garden setting at the famous Le Jardin restaurant.",
      image: "https://www.thebohoguide.com/wp-content/uploads/job-manager-uploads/main_image/2016/09/le-jardin.jpg", // Remplacer par une image réelle
    },
    {
      title: "Ride a Horse-Drawn Carriage",
      description: "Take a traditional horse-drawn carriage ride through the streets of Marrakech and experience the city like a local.",
      image: "https://inayaconciergerie.com/cdn/shop/files/images_8b2628f1-a2f5-4133-9539-2a06928b68b1.jpg?v=1715646589", // Remplacer par une image réelle
    },
  ],
};

const CAN = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className="can-page">

      <header className="header" style={{ backgroundImage: "url('/images/can2.png')" }}>
        <div className="">
          <h1>{canInfo.title}</h1>
          <p>{canInfo.description}</p>
          <p><strong>Dates:</strong> {canInfo.dates}</p>
        </div>
      </header>

      <section className="stadiums">
        <h2>Stadiums for CAN 2025</h2>
        <div className="stadiums-container">
          {stadiums.map((stadium, index) => (
            <div className="stadium-card" key={index} onClick={() => handleCitySelect(stadium.city)}>
              <img src={stadium.image} alt={stadium.name} className="stadium-image" />
              <h3>{stadium.name}</h3>
              <p>{stadium.city}</p>
              <p><strong>Capacity:</strong> {stadium.capacity}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Itinerary Section */}
      {selectedCity ? (
        itineraries[selectedCity] && itineraries[selectedCity].length > 0 ? (
          <section className="itinerary">
            <h2>Things to Do in {selectedCity}</h2>
            <div className="itinerary-container">
              {itineraries[selectedCity].map((itinerary, index) => (
                <div className="itinerary-card" key={index}>
                  <img src={itinerary.image} alt={itinerary.title} className="itinerary-image" />
                  <h3>{itinerary.title}</h3>
                  <p>{itinerary.description}</p>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <p>Sorry, no activities available for this city yet.</p>
        )
      ) : (
        <p>Please select a city to see the available activities.</p>
      )}
    </div>
  );
};

export default CAN;
