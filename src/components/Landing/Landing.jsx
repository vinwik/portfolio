import React, { useState, useEffect } from "react";
import { ReactComponent as Angle } from "./angle-down.svg";
import Social from "../Social/Social";
import "./Landing.css";

import Fade from "react-reveal/Fade";

const Landing = () => {
  const getWindowHeight = () => {
    const height = window.innerHeight;
    return height;
  };

  const getWindowWidth = () => {
    const width = window.innerWidth;
    return width;
  };

  // const windowWidth = window.innerWidth;

  const [windowHeight, setWindowHeight] = useState(getWindowHeight());
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = () => {
      if (window.innerWidth <= 900) {
        setIsMobile(true);
      }
    };
    mobile();
    const handleResize = () => {
      if (windowWidth !== window.innerWidth) {
        setWindowHeight(getWindowHeight());
        setWindowHeight(getWindowHeight());
      }
      // console.log("state", windowWidth);
      // console.log("window", window.innerWidth);
      // console.log("height", window.innerHeight);
    };

    const update = () => {
      // if (windowWidth !== window.innerWidth) {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        // };
      };
    };
    update();
    // if (windowWidth !== window.innerWidth) {
    //   window.addEventListener("resize", handleResize);
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }
  }, []);

  console.log(windowWidth);
  console.log(window.innerWidth);

  const style = {
    height: isMobile && `${windowHeight}px`
  };

  return (
    <main id="landing" style={style}>
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
