import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";


function App() {
  return (
    <Router>
      <Navbar />
      <Carousel />
     
    </Router>
  );
}

export default App;
