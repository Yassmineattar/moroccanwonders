import React from "react";
import HeaderBackground from "./HeaderBackground";

import "./Plan.css";
import Navbar from "../landing_page/Navbar";
import Form from "./Form";
import Footer from "../landing_page/Footer";


function Plan() {
  return (
    <div className="plan-page">
      <Navbar/>
      <HeaderBackground /> 
      <Form/>
      <Footer/>

      
    </div>
  );
}

export default Plan;