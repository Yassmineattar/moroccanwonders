
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Destinations from "./components/Destinations/Destinations";
import CAN from "./components/CAN2025/CAN";
import Store from "./components/Store/Store";
import Plan from "./components/Plan/Plan";
import Home from "./components/landing_page/Home";
import Favorites from "./components/Favorites/Favorites";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/can2025" element={<CAN />} />
        <Route path="/store" element={<Store />} />
        <Route path="/plan/*" element={<Plan />} />
        <Route path="/favorites" element={<Favorites />} />
        
      </Routes>
    




    </Router>
  );
}

export default App;
