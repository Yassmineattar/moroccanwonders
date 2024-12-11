import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './TraditionalStore.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Exemple de données pour les items à afficher dans le carrousel (les produits de la boutique)
const data = [
  {
    title: "Oriental Slippers",
    description: "Handmade pottery from Fez, crafted by local artisans.",
    image: "/images/image 14.png",
  },
  {
    title: "Berber Rugs",
    description: "Authentic rugs woven by Berber tribes in the Atlas Mountains.",
    image: "/images/image 17.png", // Remplacez par l'URL de vos images
  },
  {
    title: "Handcrafted Leather Bags",
    description: "Made from the finest leather, crafted with love and care.",
    image: "/images/image 16.png", // Remplacez par l'URL de vos images
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
  for (let i = 0; i < data.length; i += 3) {
    groupedProducts.push(data.slice(i, i + 3));
  }

  return (
    <div className="traditional-store">
      <h2 className="tradTitle">Discover Our Traditional Store</h2>
        {/* <p>
          Explore a range of unique, hand-crafted products that reflect the beauty
          and richness of traditional Moroccan culture. Each piece is a testament to
          craftsmanship and heritage.
        </p> */}

      {/* Swiper pour le carrousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={18} // Espacement entre les slides
        slidesPerView={1} // Afficher un slide à la fois
        navigation
        pagination={{ clickable: true }}
        // breakpoints={{
        //   1024: {
        //     slidesPerView: 1, // Afficher 1 slide sur les grands écrans
        //   },
        //   768: {
        //     slidesPerView: 1, // Afficher 1 slide sur les écrans moyens
        //   },
        //   480: {
        //     slidesPerView: 1, // Afficher 1 slide sur les petits écrans
        //   },
        // }}
      >
        {groupedProducts.map((group, idx) => (
          <SwiperSlide key={idx}>
            <div className="grid-container">
              {group.map((item, itemIdx) => (
                <div key={itemIdx}>
                  <div className="trad-slide-content">
                    {/* Icône de cœur */}
                    <div className="favorite-icon">
                      <i className="fas fa-heart"></i>
                    </div>
                    {/* Image */}
                    <img src={item.image} alt={item.title} className="trad-slide-image" />
                    <div className="trad-slide-description">
                      <h3>{item.title}</h3>
                    </div>
                    <button className="trad-discover-btn">Buy</button>
                  </div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
        <br></br>
      </Swiper>

      {/* Bouton View More en dessous du carrousel */}
        <center><button className="view-more-btn">View More</button></center>
    </div>
  );
};

export default TraditionalStore;
