import React from "react";
import "./Footer.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>MoroccoWonders</h2>
          <ul>
            <li>Your favorite Morocco tourist guide platform where u can explore our
            best spots, best traditional items, and plan your trip for your next
            holiday.</li>
            </ul>
        
            <div className="footer-icons">
  <i className="fab fa-instagram"></i>
  <i className="fab fa-facebook"></i>
  <i className="fab fa-twitter"></i>
  <i className="fas fa-globe"></i>
  <i className="fab fa-github"></i>
</div>

        </div>
        <div className="footer-section">
        <h3>Links</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/can2025">CAN 2025</a></li>
            <li><a href="/traditional-store">Traditional store</a></li>
            <li><a href="/plan-your-trip">Plan your trip</a></li>
        </ul>

        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>About Us</li>
            <li>Blog & Articles</li>
            <li>Term and Condition</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Address: Bd Nile, Sidi Othmane </li> 
            <li>Casablanca, Morocco</li> 
            <li>Phone: 123 456 7890</li> 
            <li>Email: yasminejiji@gmail.com</li> 
            <li>Maps: Kediri, East Java</li>
          </ul>
           
        </div>
      </div>
    </footer>
  );
};

export default Footer;
