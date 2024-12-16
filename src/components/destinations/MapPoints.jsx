import React from 'react';

const MapPoints = ({ mapPoints }) => (
    <div style={{ marginBottom: '20px', padding: '10px' }}>
        <h2>Notable Map Points</h2>
        <ul>
            {mapPoints.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
    </div>
);

export default MapPoints;
