import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import WhyVisitMorocco from "./components/WhyVisitMorocco"
import BiggestEvent from "./components/BiggestEvent"

function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
      <WhyVisitMorocco />
      <BiggestEvent />

    </Router>
  );
}

export default App;
