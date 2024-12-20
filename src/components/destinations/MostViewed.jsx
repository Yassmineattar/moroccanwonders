import React from 'react';
import './MostViewed.css';

const MostViewed = ({ destinations }) => (
    <div className="most-viewed">
        <h1 className="centered-title">Most Viewed</h1>
        <ul>
            {destinations.slice(0, 3).map((dest, index) => (
                <li key={index}>
                    <strong>{dest.destination}</strong>
                    <span>{dest.description}</span>
                </li>
            ))}
        </ul>
    </div>
);

export default MostViewed;
