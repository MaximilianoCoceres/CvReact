import React from "react";
import "./skills.css";
import Logohtml from "../../img/html.png";
import Logocss from "../../img/css.png";
import Logoreact from "../../img/react-native-logo.png";
import LogoJs from "../../img/JavaScript-Logo.png";
import Logobootstrap from "../../img/Bootstrap_logo.png";
import Logowordpress from "../../img/WordPress_blue_logo.svg.png";
import Illustrator from "../../img/Illustrator-Logo.png";
import Photoshop from "../../img/Photoshop-Logo.png";
import Gimp from "../../img/gimp.png";
import Figma from "../../img/Figma.png";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ProgressProvider from "./ProgressProvider";

const Skills = () => {
  const [valueEnd, setValueEnd] = React.useState(10);
  const [valueEnd2, setValueEnd2] = React.useState(20);
  const [valueEnd3, setValueEnd3] = React.useState(30);
  const [valueEnd4, setValueEnd4] = React.useState(40);
  const [valueEnd5, setValueEnd5] = React.useState(50);
  const [valueEnd6, setValueEnd6] = React.useState(60);
  const [valueEnd7, setValueEnd7] = React.useState(70);
  const [valueEnd8, setValueEnd8] = React.useState(80);
  const [valueEnd9, setValueEnd9] = React.useState(90);

  return (
    <div className="row skills p-3 align-items-center d-flex flex-column" style={{minHeight: "80vh"}}>
      <div className="col-12 col-lg-6">
        <div className="row ">
          <div className="titleSkill design d-flex align-items-center justify-content-center">
            <h1 className="d-flex align-items-center justify-content-center">Front-End and Design</h1>
          </div>
          <div class="col-6 col-sm-4 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd8}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "red",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img style={{ width: 50 }} src={Logohtml} alt="HTML" />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div class="col-6 col-sm-4 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd8}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "blue",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img style={{ width: 50 }} src={Logocss} alt="CSS" />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div class="col-6 col-sm-4 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd4}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "cyan",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img style={{ width: 50 }} src={Logoreact} alt="React" />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div class="col-6 col-sm-4 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd6}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "yellow",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img style={{ width: 50 }} src={LogoJs} alt="Javascript" />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div class="col-6 col-sm-4 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd7}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "#9d00ff",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img
                    style={{ width: 50 }}
                    src={Logobootstrap}
                    alt="Bootstrap"
                  />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div class="col-6 col-sm-4 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd5}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "#00749c",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img
                    style={{ width: 50 }}
                    src={Logowordpress}
                    alt="Wordpress"
                  />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          
        </div>
      </div>
      <div className=" col-12 col-lg-6">
        <div className="row">
        <div className="col-4 col-sm-3 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd8}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "orange",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img
                    style={{ width: 50 }}
                    src={Illustrator}
                    alt="Illustrator"
                  />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div className="col-4 col-sm-3 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd6}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "blue",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img style={{ width: 50 }} src={Photoshop} alt="Photoshop" />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div className="col-4  col-sm-3 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd8}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "violet",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img style={{ width: 50 }} src={Figma} alt="Figma" />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
          <div className="col-4 col-sm-3 mb-2">
            <ProgressProvider valueStart={0} valueEnd={valueEnd5}>
              {(value) => (
                <CircularProgressbarWithChildren
                  value={value}
                  styles={buildStyles({
                    pathColor: "gray",
                    trailColor: "black",
                    pathTransitionDuration: 2,
                  })}
                >
                  <img style={{ width: 50 }} src={Gimp} alt="Gimp" />
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

