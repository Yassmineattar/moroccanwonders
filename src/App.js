import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationGeneral from "./components/destinations/DestinationGeneral";
import DestinationPage from "./components/destinations/DestinationPage";
import CAN from "./components/CAN2025/CAN";
import Store from "./components/Store/Store";
import Plan from "./components/Plan/Plan";
import Home from "./components/landing_page/Home";
import Favorites from "./components/Favorites/Favorites";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [favorites, setFavorites] = useState([]); // Manage favorite destinations globally
  const [favoriteHotels, setFavoriteHotels] = useState([]); // Manage favorite hotels globally
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/destination/:destination" element={<DestinationPage />} />
        <Route path="/can2025" element={<CAN />} />
        <Route path="/store" element={<Store />} />

        {/* Pass favorites and setFavorites to DestinationGeneral */}
        
        <Route
                    path="/destinations/destinationGeneral"
                    element={
                        <DestinationGeneral
                            favorites={favorites}
                            setFavorites={setFavorites}
                            favoriteHotels={favoriteHotels}
                            setFavoriteHotels={setFavoriteHotels}
                        />
                    }
        />

        {/* Pass both favorites and favoriteHotels to Favorites */}
        <Route
                    path="/favorites"
                    element={
                        <Favorites
                            favorites={favorites}
                            favoriteHotels={favoriteHotels}
                        />
                    }
        />
      </Routes>
    </Router>
  );
}

export default App;
