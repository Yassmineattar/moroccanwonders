import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></button>
      </div>
      <div className="carousel-inner">
      <div className="carousel-item active">
  <img
    src="/images/chefchaouen.jpg"
    className="d-block w-100"
    alt="Chefchaouen"
  />
  <div className="carousel-caption">
    <h5>Explore Morocco's Blue Gem</h5>
    <p>
    Chefchaouen is undoubtedly one of Morocco's (and possibly the world's) most
    Instagrammable spots, thanks to the blue hues that surround every nook and cranny.
  </p>
    </div>
</div>

        <div className="carousel-item">
          <img
            src="/images/sahara.jpg" 
            className="d-block w-100"
            alt="Deserts"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Discover the Sahara</h5>
            <p>Experience the vastness of Morocco's deserts.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/fna.jpeg" 
            className="d-block w-100"
            alt="Culture"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Immerse in Moroccan Culture</h5>
            <p>From music to cuisine, Morocco has it all.</p>
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
  );
}

export default Carousel;
