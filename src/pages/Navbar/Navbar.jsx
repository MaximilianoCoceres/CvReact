import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <div className="navbar p-4 flex-column flex-sm-row">
      <div className="logo">
        <img src={Logo} alt="MaxiDev" />
      </div>

      <div className="d-flex flex-column flex-sm-row align-items-center ol-list-custom">
        <ol className="row m-0 p-0">
          <li className="col-6 col-sm-auto">
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li className="col-6 col-sm-auto">
            <Link to={"/about"} className="link">
              About
            </Link>
          </li>
          <li className="col-6 col-sm-auto">
            <Link to={"/skills"} className="link">
              Skills
            </Link>
          </li>
          <li className="col-6 col-sm-auto">
            <Link to={"/works"} className="link">
              Works
            </Link>
          </li>
        </ol>
        <Link to={"/contact"}>
          <button className="button">Contact me</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
