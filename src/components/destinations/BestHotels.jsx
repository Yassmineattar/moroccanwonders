import React from 'react';
import './BestHotels.css';

const hotels = [
    {
        name: 'Kasbah Hotel',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/537739202.jpg?k=64ba3209412f8d7550813875d3bf01f6a49071cc0ff862a7068b249eacce1e52&o=&hp=1',
        description: 'Perfect for exploring the desert.',
    },
    {
        name: 'Riad Fes',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/314201577.jpg?k=6b49386ac204257eabdf91167943139ef33efc40a6fe774996407ce0548d11b3&o=&hp=1',
        description: 'A luxury stay in the heart of Fes.',
    },
    {
        name: 'Villa Maroc',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/12/ef/a1/vue-de-la-piscine.jpg?w=900&h=-1&s=1',
        description: 'Enjoy ocean views in Essaouira.',
    },
];

const BestHotels = ({ favoriteHotels, setFavoriteHotels }) => {
    const toggleFavoriteHotel = (hotel) => {
        if (favoriteHotels.some((fav) => fav.name === hotel.name)) {
            // Remove from favorites
            setFavoriteHotels(favoriteHotels.filter((fav) => fav.name !== hotel.name));
        } else {
            // Add to favorites
            setFavoriteHotels([...favoriteHotels, hotel]);
        }
    };

    return (
        <div className="best-hotels">
            <h1 class="centered-title">Best Hotels</h1>
            <div className="hotel-list">
                {hotels.map((hotel, index) => (
                    <div key={index} className="hotel-card">
                        {/* Heart Icon */}
                        <div
                            className={`hotel-favorite-icon ${
                                favoriteHotels.some((fav) => fav.name === hotel.name) ? 'active' : ''
                            }`}
                            onClick={() => toggleFavoriteHotel(hotel)}
                        >
                            ❤️
                        </div>
                        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                        <h3>{hotel.name}</h3>
                        <p>{hotel.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BestHotels;
