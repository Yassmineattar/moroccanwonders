import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';
import FavoriteHotels from './FavoriteHotels'; // Import FavoriteHotels component
import FavoritesHeader from './FavoritesHeader';
import Footer from '../layout/Footer';
const Favorites = ({ favorites = [], favoriteHotels = [] }) => {
    return (
        <div className="favorites-page">
          <FavoritesHeader />
            
            <section>
                <h2>Your Favorite Destinations</h2>
                <p className="favorites-description">
                    Explore your handpicked favorite destinations. Click "Learn More" to dive deeper into each location!
                </p>

                {favorites.length === 0 ? (
                    <div className="no-favorites">
                        <p className="no-favorites-message">
                            You have no favorite destinations yet. Start adding some!
                        </p>
                        <Link to="/destinations/destinationGeneral" className="back-to-destinations-button">
                            Back to Destinations
                        </Link>
                    </div>
                ) : (
                    <div className="favorites-grid">
                        {favorites.map((favorite, index) => (
                            <div key={index} className="favorite-card">
                                <img
                                    src={favorite.bannerImage}
                                    alt={favorite.destination}
                                    className="favorite-banner"
                                />
                                <div className="favorite-details">
                                    <h2>{favorite.destination}</h2>
                                    <p>
                                        {favorite.description.length > 100
                                            ? `${favorite.description.slice(0, 100)}...`
                                            : favorite.description}
                                    </p>
                                    <Link
                                        to={`/destination/${favorite.destination.toLowerCase()}`}
                                        className="learn-more-button"
                                    >
                                        View More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Favorite Hotels Section */}
            <section>
                <h2>Your Favorite Hotels</h2>
                <FavoriteHotels favoriteHotels={favoriteHotels} /> {/* Pass favoriteHotels */}
            </section>
            <Footer/>
        </div>
    );
};

export default Favorites;
