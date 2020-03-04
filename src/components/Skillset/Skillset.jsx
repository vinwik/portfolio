import React from "react";
import "./Skillset.css";

import { ReactComponent as HtmlLogo } from "./html5.svg";
import { ReactComponent as JsLogo } from "./js.svg";
import { ReactComponent as ReactLogo } from "./react.svg";
import { ReactComponent as NodeLogo } from "./node.svg";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const WordClouds = () => {
  return (
    <Parallax
      y={["-300px", "-180px"]}
      slowerScrollRate={true}
      aria-hidden="true"
    >
      <p style={{ top: 80, left: "10%" }}>CSS3</p>
      <p style={{ top: 70, left: "45%" }}>SASS</p>
      <p style={{ top: 120, left: "65%" }}>git</p>
      <p style={{ top: 80, left: "75%" }}>Context API</p>
      <p style={{ top: 150, left: "95%" }}>ES6</p>
      <p style={{ top: 170, left: -50 }}>Illustrator</p>
      <p style={{ top: 120, left: "22%" }}>Adobe XD</p>
      <p style={{ top: 280, left: "5%" }}>Hooks</p>
      <p style={{ top: 310, left: "18%" }}>mongoDB</p>
      <p style={{ top: 290, left: "40%" }}>postgreSQL</p>
      <p style={{ top: 280, left: "65%" }}>NPM</p>
      <p style={{ top: 300, left: "85%" }}>Gatsby</p>
    </Parallax>
  );
};

const Skillset = () => {
  return (
    <ParallaxProvider>
      <section id="skillset" className="skillset">
        <div className="wrapper">
          <h1 className="section-title">Skillset</h1>
          <div className="content">
            <div className="skill-icons">
              <HtmlLogo />
              <JsLogo />
              <ReactLogo />
              <NodeLogo />
            </div>
            <div className="skill-words">
              <WordClouds />
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Skillset;
