import React from "react";
import Slider from "react-slick";
import "./BiggestEvent.css";

const BiggestEvent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="biggest-event">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="slide">
          <img src="" alt="Slide 1" className="slide-image" />
          <h1 className="title">Don’t Miss Morocco’s Biggest Event Next Year</h1>
          <p className="description">
            Morocco is set to host the Africa Cup of Nations (CAN) 2025, marking a historic moment for the country's vibrant football culture.
          </p>
          <div className="buttons">
            <button className="btn primary-btn">View More</button>
            <button className="btn secondary-btn">Discover Stadiums</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="slide">
          <img src="/public/images/worldcup.png" alt="Slide 2" className="slide-image" />
          <h1 className="title">Exciting Matches Await You!</h1>
          <p className="description">
            Get ready to experience exhilarating football matches between top African teams at the CAN 2025.
          </p>
          <div className="buttons">
            <button className="btn primary-btn">Learn More</button>
            <button className="btn secondary-btn">Explore Matches</button>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default BiggestEvent;
