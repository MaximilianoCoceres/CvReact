import React from "react";
import { Link } from "react-router-dom";
import "./Postit.css"

const Postit = ({children, link, linkText, styles}) => {
  return (
    <div className="postit" style={styles} >
      {children}
      <Link to={link}>
        {linkText}
      </Link>
    </div>
  );
};

export default Postit;