import React, { useState, useEffect } from "react";
import CategorySlider from "./CategorySlider";
import "./DestinationSection.css";

const DestinationSection = () => {
  const [categories, setCategories] = useState([]); // État pour stocker les catégories
  const [loading, setLoading] = useState(true); // État pour le chargement

  // Fonction pour récupérer les données depuis l'API
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/categories"); // Remplacez par l'URL de votre API
      const data = await response.json();

      // Stocker les données des catégories
      setCategories(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      setLoading(false);
    }
  };

  // Appeler fetchCategories lors du montage du composant
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
