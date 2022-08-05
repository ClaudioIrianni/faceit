import React from "react";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={125}
        glareMaxOpacity={0.45}
        scale={1.2}
        style={{ height: 150, width: 150 }}
      >
        <div className="inner-element pa3">
          <div>
            <img style={{ paddingTop: "5px" }} src={brain} alt="brain" />
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
