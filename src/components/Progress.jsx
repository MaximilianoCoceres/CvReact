import React from "react";
import "./progress.css";

const Progress = ({ img, styles }) => {
  return (
    <div className="circular" style={styles}>
      <div className="inside"></div>
      <div className="outside"></div>
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="circulo">
        <div className="dot">
          <span></span>
        </div>
        <div className="barra left">
          <div className="progreso"></div>
        </div>
        <div className="barra right">
          <div className="progreso"></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
