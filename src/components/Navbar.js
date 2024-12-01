import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MoroccoWonders
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
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
            <li className="nav-item">
              <Link className="nav-link" to="/plan">
                Plan Your Trip
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
