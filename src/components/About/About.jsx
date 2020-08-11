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
                  I'm Vincent, Creative Web Developer based in London.
                </p>
                <p>
                  Everything started as a kid in early 2000 when I acquired my
                  first computer, a "powerful" Pentium III 800Mhz.
                </p>
                <p>
                  Ever since I have been experimenting with a variety of tools
                  and technologies including photo editing, 3d modeling, music
                  creation and of course, web development.
                </p>
                <p>
                  If you ready to put your trust in a passionate developer with
                  2.5 years of experience in freelancing, please feel free to{" "}
                  <a href="#contact">
                    <span className="link">contact me</span>
                  </a>
                  .
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default About;
