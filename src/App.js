import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationGeneral from "./components/destinations/DestinationGeneral";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import DestinationPage from "./components/destinations/DestinationPage";
import CAN from "./components/CAN2025/CAN";
import Store from "./components/Store/Store";
import Plan from "./components/Plan/Plan";
import Home from "./components/landing_page/Home";
import Favorites from "./components/Favorites/Favorites";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/destination/:destination" element={<DestinationPage />} />
        <Route path="/can2025" element={<CAN />} />
        <Route path="/store" element={<Store />} />
        <Route path="/destinations/destinationGeneral" element={<DestinationGeneral />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
