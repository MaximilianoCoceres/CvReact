import React from "react";
import "./polaroid.css";
import { FaLink, FaGithubAlt } from "react-icons/fa";

const Polaroid = ({ src, styles, Categories = [], link1, link2 }) => {
  return (
    <div className="polaroid">
    <figure>

      <img src={src} alt="" style={styles} className="photoPolaroid" />
    </figure>
      <div className="details">
        {Categories.map((item, index) => (
          <span
            key={index}
            style={item.styles}
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="links">
        <button className="text-success bg-white rounded-start">
         <a className="linkIcon" href={link1} target="_blank" rel="noreferrer"><FaLink/></a> 
        </button>{" "}
        <button className="bg-white rounded-end">
        <a className="linkGit" href={link2} target="_blank" rel="noreferrer"><FaGithubAlt/></a>
        </button>
      </div>
    </div>
  );
};

export default Polaroid;
