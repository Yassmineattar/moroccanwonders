import React, { useState, useEffect } from "react";
import CategorySlider from "./CategorySlider";
import "./DestinationSection.css";

const DestinationSection = () => {
  const [categories, setCategories] = useState([]); // Stockage des catégories
  const [loading, setLoading] = useState(true); // État de chargement

  // Fonction pour récupérer les données depuis l'API
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories"); // URL de votre API
      const data = await response.json();

      // Transformer les données si nécessaire
      setCategories(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false); // Arrêter l'état de chargement
    }
  };

  // Appeler l'API lorsque le composant est monté
  useEffect(() => {
    fetchCategories();
  }, []);

  // Afficher un message de chargement si les données ne sont pas encore prêtes
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="destination-section">
      <h2>Choose Your Next Destination</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <CategorySlider
            key={index}
            title={category.title}
            destinations={category.destinations}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationSection;
