import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          MoroccoWonders
        </Link>

        {/* Toggler */}
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-links">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/destinations/destinationGeneral">
                Destinations
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/can2025">
                CAN 2025
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/store">
                Traditional Store
              </Link>
            </li>
            <li className="dropdown">
              <Link className="nav-link" to="/plan">
                Plan Your Trip
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/plan">
                    Plan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/plan/hotels">
                    Hotels
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-icons">
            <li>
              <Link className="nav-link" to="/favorites">
                <FaHeart className="icon" />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/profile">
                <FaUser className="icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
