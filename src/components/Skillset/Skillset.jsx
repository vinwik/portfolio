import React from "react";
import "./Skillset.css";

import { ReactComponent as HtmlLogo } from "./html5.svg";
import { ReactComponent as JsLogo } from "./js.svg";
import { ReactComponent as ReactLogo } from "./react.svg";
import { ReactComponent as NodeLogo } from "./node.svg";

import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import ScrollableAnchor from "react-scrollable-anchor";

const SkillWords = () => {
  return (
    <Parallax
      y={["-220px", "-300px"]}
      slowerScrollRate={true}
      aria-hidden="true"
    >
      <Parallax y={["50px", "-50px"]}>
        <p style={{ top: 80, left: "10%" }}>CSS3</p>
        <p style={{ top: 120, left: "22%" }}>Adobe XD</p>
        <p style={{ top: 70, left: "45%" }}>SASS</p>
        <p style={{ top: 120, left: "65%" }}>git</p>
        <p style={{ top: 80, left: "75%" }}>Context API</p>
        <p style={{ top: 150, left: "95%" }}>ES6</p>
      </Parallax>
      <p style={{ top: 170, left: -50 }}>Illustrator</p>
      <Parallax y={["20px", "0px"]}>
        <p style={{ top: 280, left: "5%" }}>Hooks</p>
        <p style={{ top: 310, left: "18%" }}>mongoDB</p>
        <p style={{ top: 290, left: "40%" }}>postgreSQL</p>
        <p style={{ top: 280, left: "65%" }}>NPM</p>
        <p style={{ top: 300, left: "85%" }}>Gatsby</p>
      </Parallax>
    </Parallax>
  );
};

const Skillset = () => {
  return (
    <ScrollableAnchor id="skillset">
      <ParallaxProvider>
        <section className="skillset">
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
                <SkillWords />
              </div>
            </div>
          </div>
        </section>
      </ParallaxProvider>
    </ScrollableAnchor>
  );
};

export default Skillset;
