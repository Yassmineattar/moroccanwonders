import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../landing_page/Navbar';
import BlogSection from './BlogSection';
import BestHotels from './BestHotels';
import MostViewed from './MostViewed';
import GoodPriceDeals from './GoodPriceDeals';
import './DestinationGeneral.css';

const DestinationGeneral = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/destinations');
                if (!response.ok) {
                    throw new Error('Failed to fetch destinations');
                }
                const data = await response.json();
                setDestinations(data);
            } catch (err) {
                setError('Error fetching destinations.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDestinations();
    }, []);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div>
            <Navbar />
            {/* Top Section with Background Image */}
            <div className="destination-top-section">
                <h1 className="page-title">Explore Destinations</h1>
                <p className="page-description">
                    Discover Morocco's most beautiful destinations, handpicked hotels, travel blogs, and the best deals!
                </p>
            </div>

            <div className="destination-general">
                {/* Main Destinations Grid */}
                <div className="destination-grid">
                    {destinations.map((destination, index) => (
                        <div key={index} className="destination-card">
                            <img
                                src={destination.bannerImage}
                                alt={destination.destination}
                                className="destination-banner"
                            />
                            <div className="destination-details">
                                <h2>{destination.destination}</h2>
                                <p>{destination.description}</p>
                                <div className="destination-buttons">
                                    <Link
                                        to={`/destination/${destination.destination.toLowerCase()}`}
                                        className="learn-more-button"
                                    >
                                        Learn More
                                    </Link>
                                    <Link
                                        to={`/plan-your-trip?destination=${destination.destination.toLowerCase()}`}
                                        className="plan-trip-button"
                                    >
                                        Plan Your Trip
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Sections */}
                
                <BestHotels />
                <MostViewed destinations={destinations} />
                <GoodPriceDeals />
                <BlogSection />
            </div>
        </div>
    );
};

export default DestinationGeneral;
