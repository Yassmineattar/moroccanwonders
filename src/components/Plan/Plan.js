import React from "react";
import HeaderBackground from "./HeaderBackground";

import "./Plan.css";
import Navbar from "../landing_page/Navbar";
import Form from "./Form";


function Plan() {
  return (
    <div className="plan-page">
      <Navbar/>
      <HeaderBackground /> 
      <Form/>


      
    </div>
  );
}

export default Plan;