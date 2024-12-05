import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import WhyVisitMorocco from "./components/WhyVisitMorocco"
import BiggestEvent from "./components/BiggestEvent"
import Swiper from "./components/Swiper";
function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <WhyVisitMorocco />
      <BiggestEvent />
      
      <Swiper/>

    </Router>
  );
}

export default App;
