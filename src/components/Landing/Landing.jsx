import React, { useState, useEffect } from "react";
import { ReactComponent as Angle } from "./angle-down.svg";
import Social from "../Social/Social";
import "./Landing.css";

import Fade from "react-reveal/Fade";

const Landing = () => {
  const getWindowHeight = () => {
    const vh = window.innerHeight;
    return vh;
  };

  const useWindowHeight = () => {
    const [windowHeight, setWindowHeight] = useState(getWindowHeight());
    useEffect(() => {
      function handleResize() {
        setWindowHeight(getWindowHeight());
      }
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return windowHeight;
  };

  const vh = useWindowHeight();

  return (
    <main id="landing" style={{ height: `${vh}px` }}>
      <div className="bg">
        <div className="wrapper">
          <Fade left>
            <p>Hi, I'm</p>
            <h1>
              <span>Vincent Wikart</span>,
            </h1>
            <h2>Creative Front End Developer.</h2>
          </Fade>
          <Fade bottom delay={700}>
            <a href="#projects" className="btn btn-accent">
              Jump to projects
            </a>
          </Fade>
          <Social className="icon" fade="1200" />
        </div>
        <a href="#about" className="angle-down" aria-label="Go to About">
          <Angle alt="About me" className="svg" />
        </a>
      </div>
    </main>
  );
};

export default Landing;
