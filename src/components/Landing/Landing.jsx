import React from "react";
import { ReactComponent as Angle } from "./angle-down.svg";
import "./Landing.css";
import Social from "../Social/Social";

const Landing = () => {
  return (
    <main id="landing">
      <div className="bg">
        <div className="wrapper">
          <p> Hi, I'm</p>
          <h1>
            <span>Vincent Wikart</span>,
          </h1>
          <h2>Creative Front End Developer.</h2>
          <a href="#projects" className="btn btn-accent">
            Jump to projects
          </a>
          <Social className="icon" />
        </div>
        <a href="#about" className="angle-down" aria-label="Go to About">
          <Angle alt="About me" className="svg" />
        </a>
      </div>
    </main>
  );
};

export default Landing;
