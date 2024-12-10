import React from "react";

import "./DestinationSection.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const DestinationSection = () => {
  const categories = [
    { title: "Touristic Cities", destinations: ["CFC Tower Casablanca"] },
    { title: "Natural Spots", destinations: ["Akchour Waterfalls"] },
    { title: "Historical Spots", destinations: ["Université Al Quaraouiyine"] },
    { title: "Sahara", destinations: ["Merzouga Desert"] },
    { title: "Souks", destinations: ["Place Jamaa El Fna"] },
    { title: "Artistical Spots", destinations: ["Blue city Tetouan"] },
  ];

const App = () => {
  return (
    <div>
      <h1 className="destTitle">Choose Your Next Destination</h1>
     
      <div className="grid-container">
        {data.map((carousel, index) => (
          <div className="carousel-card" key={index}>
            <h3 className="carousel-title">{carousel.category}</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {carousel.items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="slide-content">
                    {/* Icône de cœur */}
                    <div className="favorite-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    {/* Image */}
                    <img src={item.image} alt={item.title} className="slide-image" />
                   
                    <div className="slide-description">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    
                    <button className="discover-btn">Discover More</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>

      {/* Deuxième groupe de slides */}
      <div className="grid-container">
        {data.map((carousel, index) => (
          <div className="carousel-card" key={index + data.length}>
            <h3 className="carousel-title">{carousel.category}</h3>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {carousel.items.map((item, idx) => (
                <SwiperSlide key={idx + data.length}>
                  <div className="slide-content">
                   
                    <div className="favorite-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    {/* Image */}
                    <img src={item.image} alt={item.title} className="slide-image" />
                    
                    <div className="slide-description">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                    
                    <button className="discover-btn">Discover More</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  );}
};

export default App;
