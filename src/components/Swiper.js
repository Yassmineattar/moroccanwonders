import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const data = [
  {
    category: "Touristic Cities",
    items: [
      {
        title: "CFC Tower Casablanca",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: "https://pbs.twimg.com/media/F7nvRv7XkAAbqd1.jpg:large",
      },
      {
        title: "Rabat City Center",
        description: "Discover the beauty of Rabat.",
        image: "https://i.pinimg.com/236x/dc/d2/e0/dcd2e079f321ac6f4b3a4ee64ff7b347.jpg",
      },
    ],
  },
  {
    category: "Natural Spots",
    items: [
      {
        title: "Akchour Waterfalls",
        description: "Explore the stunning waterfalls.",
        image: "https://i.pinimg.com/474x/6f/52/a8/6f52a80b942d079283b2cdc149f1bfa9.jpg",
      },
      {
        title: "Ouzoud Falls",
        description: "A breathtaking natural attraction.",
        image: "https://i.pinimg.com/236x/8c/54/49/8c54491272a3da051045093a7523b2c4.jpg",
      },
    ],
  },
  {
    category: "Historical Spots",
    items: [
      {
        title: "Université Al Quaraouiyine",
        description: "A historical gem in Fez.",
        image: "https://i.pinimg.com/736x/40/f6/bb/40f6bb556d570ec546bb1e247a8e538f.jpg",
      },
      {
        title: "Hassan Tower",
        description: "An iconic historical site.",
        image: "https://i.pinimg.com/236x/7e/07/18/7e0718fab319c9c0a8b1f587cecb24bd.jpg",
      },
    ],
  },
  
];

const App = () => {
  return (
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
                {/* Icône de cœur pour favoris */}
                <div className="favorite-icon">
                  <i className="fas fa-heart"></i>
                </div>
                {/* Image */}
                <img src={item.image} alt={item.title} className="slide-image" />
                {/* Texte descriptif */}
                <div className="slide-description">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                {/* Bouton Discover More */}
                <button className="discover-btn">Discover More</button>
              </div>
            </SwiperSlide>
            
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};
//
export default App;
