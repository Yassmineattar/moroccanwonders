import React from 'react';
import './MostViewed.css';

const MostViewed = ({ destinations }) => (
    <div className="most-viewed">
        <h2>Most Viewed</h2>
        <ul>
            {destinations.slice(0, 3).map((dest, index) => (
                <li key={index}>
                    <strong>{dest.destination}</strong> - {dest.description}
                </li>
            ))}
        </ul>
    </div>
);

export default MostViewed;
