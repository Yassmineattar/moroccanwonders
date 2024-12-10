import React from "react";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import WhyVisitMorocco from "./WhyVisitMorocco";
import BiggestEvent from "./BiggestEvent";
import DestinationSection from './DestinationSection';
import TraditionalStore from "./TraditionalStore";
import Footer from "./Footer";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <WhyVisitMorocco />
      <BiggestEvent />
      <DestinationSection />
      <TraditionalStore />
      <Footer />

      
    </div>


  );
};

export default Home;
