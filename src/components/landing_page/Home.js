import React from "react";
import Carousel from "./Carousel";
import WhyVisitMorocco from "./WhyVisitMorocco";
import BiggestEvent from "./BiggestEvent";
import DestinationSection from "./DestinationSection";
import TraditionalStore from "./TraditionalStore";
import PlanYourTrip from "./PlanYourTrip";

const Home = () => {
  return (
    <div>

      {/* Hero Section: Carousel */}
      <main>
        <Carousel />
      </main>

      {/* Sections */}
        <WhyVisitMorocco />

        <BiggestEvent />

        <DestinationSection />

        <TraditionalStore />

        <PlanYourTrip />

    </div>
  );
};

export default Home;
