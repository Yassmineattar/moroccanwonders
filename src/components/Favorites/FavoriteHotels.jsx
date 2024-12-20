import React from 'react';
import './FavoriteHotels.css';

const FavoriteHotels = ({ favoriteHotels = [] }) => {
    return (
        <div className="favorite-hotels">
            {favoriteHotels.length === 0 ? (
                <p className="no-favorites-message">You have no favorite hotels yet. Start adding some!</p>
            ) : (
                <div className="favorite-hotels-grid">
                    {favoriteHotels.map((hotel, index) => (
                        <div key={index} className="favorite-hotel-card">
                            <img
                                src={hotel.image}
                                alt={hotel.name}
                                className="favorite-hotel-image"
                            />
                            <h3>{hotel.name}</h3>
                            <p>{hotel.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoriteHotels;
