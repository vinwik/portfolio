import React from "react";
import profile from "./profile.jpg";
import Title from "../Title/Title";
import "./About.css";

import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <ScrollableAnchor id="about">
      <section className="about">
        <div className="wrapper">
          <Title title="about" />
          <div className="content">
            <div className="profile">
              <Fade left>
                <img className="img-fluid" src={profile} alt="Vincent Wikart" />
              </Fade>
            </div>
            <Fade right delay={500}>
              <div className="description">
                <p>
                  Hey there. <br />
                  I'm Vincent, a front-end developer based in London.
                </p>
                <p>
                  Everything started as kid in early 2000 when I got my first
                  Pentium III 800Mhz. <br />I have been playing around for half
                  a decade with Photoshop, Dreamweaver, Blender, RPG Maker (and
                  Counter Strike!).
                </p>
                <p>
                  However, Life led me to Finance, for too long... <br />
                  But, here I am! Back on track and determined to follow my
                  path.
                </p>
                <p>
                  Feel free to{" "}
                  <a href="#contact">
                    <span className="link">contact me</span>
                  </a>{" "}
                  if you want to have a chat.
                </p>
                {/* <a href="#projects" className="btn color-main">
              Contact me
            </a> */}
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default About;
