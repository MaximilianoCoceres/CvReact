import React from "react";
import "./home.css";
import Perfil from "../../img/foto-perfil.jpeg";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import Postit from "../../components/Postit";

const About = () => {
  return (
    <div className="row home">
      <div className="col-12 col-md-6 photo d-flex">
        <img src={Perfil} alt="" />
        <span>Maxi Cóceres- Web Developer</span>
      </div>
      <div className="col-12 col-md-6 d-right">
        <div className="row h-100 C-description">
          <div className="col-12 description">
            {/* Postit 1 */}
            <Postit
              link="/about"
              linkText=" about my self.."
              styles={{
                background: "#ffff88",
                gridArea: "a",
              }}
            >
              Detail-oriented Junior Front End offering analytical skills. if
              you see more
            </Postit>
            {/* Postit 2 */}
            <Postit
              link="/skills"
              linkText=" to see more.."
              styles={{
                background: "#8cfc96",
                transform: "rotate(5deg)",
                gridArea: "b"
              }}
            >
              My Skills
              <ul className="list-unstyled">
                <li>
                  HTML <FaHtml5 />
                </li>
                <li>
                  CSS <FaCss3 />
                </li>
                <li>
                  JavaScript
                  <FaJs />
                </li>
                <li>
                  React <FaReact />
                </li>
              </ul>
            </Postit>
            {/* Postit 3 */}
            <Postit
              link="/works"
              linkText=" here"
              styles={{
                background: "#86ddfd",
                transform: "rotate(5deg)"
              }}
            >
              Some of my works it's
            </Postit>
            {/* Postit 4 */}
            <Postit
              link="/contact"
              linkText=" let's talk"
              styles={{
                background: "#f9a1ec",
              }}
            >
              If you want to contact me,{" "}
            </Postit>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
