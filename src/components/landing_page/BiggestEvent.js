import React from 'react';
import './BiggestEvent.css';

const BiggestEvent = () => {
  return (
    <section className="biggest-event">
      <div className="content">
        <h1 className="title">Don’t Miss Morocco’s Biggest Event Next Year</h1>
        <p className="description">
          Morocco is set to host the Africa Cup of Nations (CAN) 2025, marking a historic moment for the country's vibrant football culture. 
          As a nation with a deep passion for the sport, Morocco promises a world-class tournament.Morocco is set to host the Africa Cup of Nations (CAN) 2025, marking a historic moment for the country's vibrant football culture. 
          As a nation with a deep passion for the sport, Morocco promises a world-class tournament.Morocco is set to host the Africa Cup of Nations (CAN) 2025, marking a historic moment for the country's vibrant football culture. 
          As a nation with a deep passion for the sport, Morocco promises a world-class tournament.
        </p>
        <div className="buttons">
          <button className="btn primary-btn" to="/can2025">View More</button>
          <button className="btn secondary-btn">Discover Stadiums</button>
        </div>
      </div>
    </section>
  );
};

export default BiggestEvent;
