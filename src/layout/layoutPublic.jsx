import React from "react";
import '../App.css';
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import Whatsapp from "../components/Whatsapp";

const LayoutPublic = () => {
  return (
      <div className="App">
        <div className="container">
          <Navbar />
          <Outlet />
          <Whatsapp/>
        </div>
      </div>
  );
};

export default LayoutPublic;
