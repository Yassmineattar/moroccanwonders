import React, { useState } from "react";
import "./Carousel.css";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0); // Suivre le slide actuel

  // Fonction de gestion du changement de slide
  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div>
      {/* Barre de recherche */}
      <div className="search-bar">
      <input type="text" placeholder="Search for city, place, product, event" />
      <i class="fas fa-search"></i> 
      </div>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        onSlide={(e) => handleSlideChange(e.to)} // Détecter le changement de slide
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className={currentSlide === 0 ? "active" : ""}
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            className={currentSlide === 1 ? "active" : ""}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            className={currentSlide === 2 ? "active" : ""}
          ></button>
        </div>

        <div className="carousel-inner">
          <div className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}>
          <img
              src="/images/fna.jpeg"
              className="d-block w-100"
              alt="Culture"
            />
            <div className="carousel-caption">
              <h5>Immerse in Moroccan Culture</h5>
              <p>From music to cuisine, Morocco has it all.</p>
              <div className="carousel-buttons">
                <button className={`btn-slide-${currentSlide}`}>Explore the Culture</button>
                <button className={`btn-slide-${currentSlide}`}>Discover the Traditions</button>
              </div>
            </div>
          </div>

          <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
            <img
              src="/images/sahara.jpg"
              className="d-block w-100"
              alt="Deserts"
            />
            <div className="carousel-caption">
              <h5>Discover the Sahara</h5>
              <p>Experience the vastness of Morocco's deserts.</p>
              <div className="carousel-buttons">
                <button className={`btn-slide-${currentSlide}`}>Explore the Desert</button>
                <button className={`btn-slide-${currentSlide}`}>Book a Tour</button>
              </div>
            </div>
          </div>
          
          <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
          <img
              src="/images/chefchaouen.jpg"
              className="d-block w-100"
              alt="Chefchaouen"
            />
            <div className="carousel-caption">
              <h5>Explore Morocco's Blue Gem</h5>
              <p>
                Chefchaouen is undoubtedly one of Morocco's most
                Instagrammable spots.
              </p>
              <div className="carousel-buttons">
                <button className={`btn-slide-${currentSlide}`}>Explore our Culture</button>
                <button className={`btn-slide-${currentSlide}`}>Explore our Destinations</button>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
