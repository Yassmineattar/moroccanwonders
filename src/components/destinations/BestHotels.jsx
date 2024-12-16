import React from 'react';
import './BestHotels.css';

const hotels = [
    { name: 'Kasbah Hotel', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/537739202.jpg?k=64ba3209412f8d7550813875d3bf01f6a49071cc0ff862a7068b249eacce1e52&o=&hp=1', description: 'Perfect for exploring the desert.' },
    { name: 'Kasbah Hotel', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/537739202.jpg?k=64ba3209412f8d7550813875d3bf01f6a49071cc0ff862a7068b249eacce1e52&o=&hp=1', description: 'Perfect for exploring the desert.' },

    { name: 'Riad Fes', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/314201577.jpg?k=6b49386ac204257eabdf91167943139ef33efc40a6fe774996407ce0548d11b3&o=&hp=1', description: 'A luxury stay in the heart of Fes.' },
    { name: 'Kasbah Hotel', image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/537739202.jpg?k=64ba3209412f8d7550813875d3bf01f6a49071cc0ff862a7068b249eacce1e52&o=&hp=1', description: 'Perfect for exploring the desert.' },
];

const BestHotels = () => (
    <div className="best-hotels">
        <h2>Best Hotels</h2>
        <div className="hotel-list">
            {hotels.map((hotel, index) => (
                <div key={index} className="hotel-card">
                    <img src={hotel.image} alt={hotel.name} />
                    <h3>{hotel.name}</h3>
                    <p>{hotel.description}</p>
                </div>
            ))}
        </div>
    </div>
);

export default BestHotels;
