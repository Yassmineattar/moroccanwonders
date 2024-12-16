import React from 'react';
import { Link } from 'react-router-dom';
import './BestDestinations.css';

const BestDestinations = ({ destinations }) => (
    <div className="best-destinations">
        <h2>Best Destinations</h2>
        <div className="carousel">
            {destinations.slice(0, 5).map((dest, index) => (
                <div key={index} className="carousel-item">
                    {/* Image */}
                    <img src={dest.bannerImage} alt={dest.destination} className="carousel-image" />

                    {/* Destination Details */}
                    <div className="carousel-details">
                        <h3 className="carousel-title">{dest.destination}</h3>
                        <p className="carousel-description">
                            {dest.description.length > 80
                                ? `${dest.description.slice(0, 80)}...`
                                : dest.description}
                        </p>
                        <p className="carousel-highlight">
                            <strong>Top Activity:</strong> {dest.activities[0]?.title || 'Not available'}
                        </p>
                        {/* Learn More Button */}
                        <Link
                            to={`/destination/${dest.destination.toLowerCase()}`}
                            className="learn-more-button"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default BestDestinations;
