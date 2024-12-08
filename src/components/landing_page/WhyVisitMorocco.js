import React, { useState } from 'react';
import './WhyVisitMorocco.css';

const WhyVisitMorocco = () => {
  // Liste des images
  const images = [
    { src: '/images/why1.jpg', alt: 'City View' },
    { src: '/images/why1.jpg', alt: 'Hot Air Balloon' },
    { src: '/images/why1.jpg', alt: 'Coastal View' },
  ];

  // État pour l'image active
  const [activeIndex, setActiveIndex] = useState(1); // Image du milieu par défaut

  // Fonction pour changer l'image active
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="why-visit-morocco">
      <div className="container">
        {/* Texte à gauche */}
        <div className="text-content">
          <h2 className="section-title">Why Visit Morocco?</h2>
          <p className="section-description">
            Morocco is a superb holiday destination that offers everything for everyone, including beaches and coves, modern and historic towns, deserts, and mountains.
          </p>
          <ul className="benefits-list">
            <li>
              You can travel to more isolated locations to enjoy wilderness and seclusion or visit well-preserved historic cities that transport you back in time.
            </li>
            <li>
              Morocco's diverse landscapes range from serene beaches to the majestic Atlas Mountains and vast Sahara Desert.
            </li>
          </ul>
        </div>

        {/* Galerie d'images à droite */}
        <div className="image-content">
          <div className="gallery-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`gallery-image ${
                  index === activeIndex ? 'active' : 'behind'
                }`}
                style={{
                  zIndex: index === activeIndex ? 2 : 1, // L'image active est au-dessus
                }}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVisitMorocco;
