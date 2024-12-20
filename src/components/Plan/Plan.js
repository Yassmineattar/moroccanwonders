import React from "react";
import HeaderBackground from "./HeaderBackground";

import "./Plan.css";
import Navbar from "../layout/Navbar";
import Form from "./Form";
import Footer from "../layout/Footer";


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