import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../landing_page/Navbar';
import BlogSection from './BlogSection';
import BestHotels from './BestHotels';
import MostViewed from './MostViewed';
import GoodPriceDeals from './GoodPriceDeals';
import './DestinationGeneral.css';
import Footer from '../landing_page/Footer';

const DestinationGeneral = ({ favorites, setFavorites, favoriteHotels, setFavoriteHotels }) => {
    const [destinations, setDestinations] = useState([]); // Store all destinations
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch destinations from the API
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

    // Toggle favorite destinations
    const toggleFavorite = (destination) => {
        const index = favorites.findIndex((fav) => fav.destination === destination.destination);
        if (index !== -1) {
            // Remove from favorites
            const updatedFavorites = [...favorites];
            updatedFavorites.splice(index, 1);
            setFavorites(updatedFavorites);
        } else {
            // Add to favorites
            setFavorites([...favorites, destination]);
        }
    };

    if (loading) return <div className="loading">Loading destinations...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div>
            <Navbar />
            {/* Top Section */}
            <div className="destination-top-section">
                <h1 className="page-title">Explore Destinations</h1>
                <p className="page-description">
                    Discover Morocco's most beautiful destinations, handpicked hotels, travel blogs, and the best deals!
                </p>
            </div>

            {/* Main Content */}
            <div className="destination-general">
            <h1 class="centered-title">Best Destinations</h1>

                {/* Destinations Grid */}
                <div className="destination-grid">
                    {destinations.map((destination, index) => (
                        <div key={index} className="destination-card">
                            {/* Favorite Icon */}
                            <div
                                className={`favorite-icon ${
                                    favorites.findIndex((fav) => fav.destination === destination.destination) !== -1
                                        ? 'active'
                                        : ''
                                }`}
                                onClick={() => toggleFavorite(destination)}
                            >
                                ❤️
                            </div>
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
                <BestHotels 
                    favoriteHotels={favoriteHotels} 
                    setFavoriteHotels={setFavoriteHotels} 
                />
                <MostViewed destinations={destinations} />
                <GoodPriceDeals />
                <BlogSection />
            </div>
            <Footer/>
        </div>
    );
};

export default DestinationGeneral;
