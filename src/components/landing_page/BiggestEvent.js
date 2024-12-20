import React from "react";
import Slider from "react-slick";
import "./BiggestEvent.css";

const BiggestEvent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <section className="biggest-event-carousel">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="biggest-event-slide">
          <div className="biggest-event-carousel-caption">
            <h1 className="biggest-event-title">Don’t Miss Morocco’s Biggest Event Next Year</h1>
            <p className="biggest-event-description">
              Morocco is set to host the Africa Cup of Nations (CAN) 2025, marking a historic moment for the country's vibrant football culture.
            </p>
            <div className="biggest-event-buttons">
              <button className="biggest-event-btn biggest-event-primary-btn">View More</button>
              <button className="biggest-event-btn biggest-event-secondary-btn">Discover Stadiums</button>
            </div>
          </div>
          <img
            src="/images/worldcup.png"
            alt="Sahara"
          />
        </div>

        {/* Slide 2 */}
        <div className="biggest-event-slide">
          <div className="biggest-event-carousel-caption">
            <h1 className="biggest-event-title">MAWAZINE FESTIVAL 2025 awaits for you!</h1>
            <p className="biggest-event-description">
              Join us for the Mawazine Festival 2025 in Rabat, a celebration of music and culture with top international and local artists. Experience electrifying performances and an unforgettable atmosphere at one of Morocco’s largest music festivals!
            </p>
            <div className="biggest-event-buttons">
              <button className="biggest-event-btn biggest-event-primary-btn">Learn More</button>
              <button className="biggest-event-btn biggest-event-secondary-btn">Explore Matches</button>
            </div>
          </div>
          <img
            src="/images/mawazine1.jpg"
            alt="World Cup"
          />
        </div>
      </Slider>
    </section>
  );
};

export default BiggestEvent;
