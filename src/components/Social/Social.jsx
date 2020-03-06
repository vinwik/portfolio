import React from "react";
import { ReactComponent as Github } from "./github.svg";
import { ReactComponent as Codepen } from "./codepen.svg";
import { ReactComponent as Mail } from "./envelope.svg";
import { ReactComponent as Linkedin } from "./linkedin-in.svg";
import "./Social.css";

import Fade from "react-reveal/Fade";

const Social = ({ fade }) => {
  return (
    <Fade delay={fade}>
      <div className="social">
        <a
          href="https://github.com/vinwik/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="Github"
        >
          <Github className="svg" />
        </a>
        <a
          href="https://codepen.io/vinwik/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="Codepen"
        >
          <Codepen className="svg" />
        </a>
        <a
          href="mailto:vinwik@hotmail.com/"
          className="icon"
          aria-label="Email"
        >
          <Mail className="svg" />
        </a>
        <a
          href="https://www.linkedin.com/in/vincent-wikart-05159a1a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label="LinkedIn"
        >
          <Linkedin className="svg" />
        </a>
      </div>
    </Fade>
  );
};

export default Social;
