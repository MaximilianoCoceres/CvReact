import React from "react";
import "./home.css";
import Perfil from "../../img/foto-perfil.jpeg";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import Postit from "../../components/Postit";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="row home">
      <div className="col-12 col-md-6 photo d-flex">
        <figure>
          <img src={Perfil} alt="" />{" "}
        </figure>
        <span>Maxi Cóceres- Web Developer</span>
      </div>
      <div className="col-12 col-md-6 d-right">
        <div className="row h-100 C-description">
          <div className="col-12 description">
            {/* Postit 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
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
            </motion.div>
            {/* Postit 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Postit
                link="/skills"
                linkText=" to see more.."
                styles={{
                  background: "#8cfc96",
                  transform: "rotate(5deg)",
                  gridArea: "b",
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
            </motion.div>
            {/* Postit 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Postit
                link="/works"
                linkText=" here"
                styles={{
                  background: "#86ddfd",
                  transform: "rotate(5deg)",
                }}
              >
                Some of my works it's
              </Postit>
            </motion.div>
            {/* Postit 4 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Postit
                link="/contact"
                linkText=" let's talk"
                styles={{
                  background: "#f9a1ec",
                }}
              >
                If you want to contact me,{" "}
              </Postit>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
