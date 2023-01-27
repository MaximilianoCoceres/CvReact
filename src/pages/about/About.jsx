import React from "react";
import Postit from "../../components/Postit";
import "./about.css";
import {AiFillLike} from "react-icons/ai";

import 'aos/dist/aos.css';
import {motion} from "framer-motion";


const textAnimation={

    offscreen: {x:-100},
    onscreen: {x:0,
      transition:{type:"spring",
        ease: "easeOut", duration: 0.7 }
    }

}


const postitAnimation={

  offscreen: {x:-100},
  onscreen: {x:0,
    transition:{type:"spring",
      ease: "easeOut", duration: 1.2 }
  }

}


const About = () => {


  return (
    <div>
      <motion.div 
      transition={{straggerChildren:0.5}}
      className="row about">
        <motion.div 
        initial={"offscreen"}
        whileInView={"onscreen"}

        variants={textAnimation}

        className="col-12 col-md-6 aboutLeft">
          <div className="t-about"
          
          
          >
            <h1>About me</h1>
            <p>
              <mark>Hi! my name is Maxi from Zaragoza, Spain. i'm
              detail-oriented Junior Front End offering analytical skills and
              specially ability to function well both independently and in
              fast-paced team environments. Always eager to learn and grow.</mark>
            </p>
          </div>
        </motion.div>
        <motion.div
        initial={"offscreen"}
        whileInView={"onscreen"}

        variants={postitAnimation}

         className="aboutRight col-12 col-md-6" >
          <Postit
          
            styles={{
              background: "#ffff88",
              
            }}
          >
            I study on my own on youtube, platzi, PixelPro.
          </Postit>
          </motion.div>
          <motion.div
          
          initial={{x:100}}
        whileInView={"onscreen"}


        variants={postitAnimation}
          >


          <Postit id={"postit"}
            styles={{
              background: "#86fd90",
              transform:"rotate(-5deg)",
              margin:"none"
            }}
          >
            <ul className="list-unstyled">
                <h3><AiFillLike></AiFillLike></h3>
              <li>Team Work</li>
              <li>Good working environment</li>
              <li>Commuication</li>
              <li>Decision-making</li>
              <li>Adaptability</li>
              <li>Creativity</li>
            </ul>
          </Postit>
          </motion.div>
          <motion.div
          initial={"offscreen"}
        whileInView={"onscreen"}


        variants={postitAnimation}
          >

          <Postit
            styles={{
              background: "#86ddfd",
              transform:"rotate(5deg)"
            }}
          >
            Tech lover and curious about new technologies
          </Postit>
          </motion.div>
       

      </motion.div>
      
    </div>
  );
};

export default About;
