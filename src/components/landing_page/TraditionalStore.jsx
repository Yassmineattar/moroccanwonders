import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './TraditionalStore.css'; // Assurez-vous que le style est bien lié
import '@fortawesome/fontawesome-free/css/all.min.css';

// Exemple de données pour les items à afficher dans le carrousel (les produits de la boutique)
const storeData = [
  {
    title: "Traditional Moroccan Pottery",
    description: "Handmade pottery from Fez, crafted by local artisans.",
    image: "https://example.com/pottery.jpg", // Remplacez par l'URL de vos images
  },
  {
    title: "Berber Rugs",
    description: "Authentic rugs woven by Berber tribes in the Atlas Mountains.",
    image: "https://example.com/rugs.jpg", // Remplacez par l'URL de vos images
  },
  {
    title: "Handcrafted Leather Bags",
    description: "Made from the finest leather, crafted with love and care.",
    image: "https://example.com/leather-bag.jpg", // Remplacez par l'URL de vos images
  },
  {
    title: "Moroccan Tea Sets",
    description: "Traditional Moroccan tea sets, perfect for serving mint tea.",
    image: "https://example.com/tea-set.jpg", // Remplacez par l'URL de vos images
  },
  {
    title: "Handwoven Baskets",
    description: "Unique baskets made by local artisans for everyday use.",
    image: "https://example.com/baskets.jpg", // Remplacez par l'URL de vos images
  },
  {
    title: "Wooden Trays",
    description: "Hand-carved wooden trays, perfect for serving Moroccan food.",
    image: "https://example.com/wooden-tray.jpg", // Remplacez par l'URL de vos images
  },
];

const TraditionalStore = () => {
  // Découpe les produits en groupes de 3 pour chaque slide
  const groupedProducts = [];
  for (let i = 0; i < storeData.length; i += 3) {
    groupedProducts.push(storeData.slice(i, i + 3));
  }

  return (
    <div className="traditional-store">
      <div className="store-content">
        <h2>Discover Our Traditional Store</h2>
        <p>
          Explore a range of unique, hand-crafted products that reflect the beauty
          and richness of traditional Moroccan culture. Each piece is a testament to
          craftsmanship and heritage.
        </p>
      </div>

      {/* Swiper pour le carrousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20} // Espacement entre les slides
        slidesPerView={1} // Afficher un slide à la fois
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1024: {
            slidesPerView: 1, // Afficher 1 slide sur les grands écrans
          },
          768: {
            slidesPerView: 1, // Afficher 1 slide sur les écrans moyens
          },
          480: {
            slidesPerView: 1, // Afficher 1 slide sur les petits écrans
          },
        }}
      >
        {groupedProducts.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="store-slide-content">
              {group.map((item, itemIdx) => (
                <div key={itemIdx} className="product-item">
                  <img src={item.image} alt={item.title} className="store-slide-image" />
                  <div className="store-slide-description">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="traditional-store-discover-btn">Discover More</button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bouton View More en dessous du carrousel */}
      <div className="view-more-container">
        <button className="view-more-btn">View More</button>
      </div>
    </div>
  );
};

export default TraditionalStore;
