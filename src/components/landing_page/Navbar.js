import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart } from "react-icons/fa";
import { IoLanguageOutline } from "react-icons/io5";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* Brand Name */}
        <Link className="navbar-brand" to="/">
          MoroccoWonders
        </Link>

        {/* Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Navigation Links */}
          <ul className="navbar-nav ms-auto">
          <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/destinations">
                Destinations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/can2025">
                CAN 2025
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">
                Traditional Store
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/plan" role="button" data-bs-toggle="dropdown">
                Plan Your Trip
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/plan/itinerary">Itinerary</Link></li>
                <li><Link className="dropdown-item" to="/plan/hotels">Hotels</Link></li>
              </ul>
            </li>
          </ul>
          {/* Icons Section */}
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">
                <FaHeart className="icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                <FaUser className="icon" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/language">
                <IoLanguageOutline className="icon" /> EN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
