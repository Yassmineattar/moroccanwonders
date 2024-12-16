import React from 'react';
import './GoodPriceDeals.css';

const deals = [
    { destination: 'Essaouira', price: '$299', details: '3 Nights & Breakfast Included' },
    { destination: 'Merzouga', price: '$399', details: '2 Nights Desert Experience' },
    { destination: 'Essaouira', price: '$299', details: '3 Nights & Breakfast Included' },
    { destination: 'Merzouga', price: '$399', details: '2 Nights Desert Experience' },
];

const GoodPriceDeals = () => (
    <div className="good-price-deals">
        <h2>Good Price Deals</h2>
        <div className="deal-list">
            {deals.map((deal, index) => (
                <div key={index} className="deal-card">
                    <h3>{deal.destination}</h3>
                    <p>{deal.details}</p>
                    <strong>{deal.price}</strong>
                </div>
            ))}
        </div>
    </div>
);

export default GoodPriceDeals;
