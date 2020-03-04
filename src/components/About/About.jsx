import React from "react";
import profile from "./profile.jpg";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="wrapper">
        <h1 className="section-title">About</h1>
        <div className="content">
          <div className="profile">
            <img className="img-fluid" src={profile} alt="Vincent Wikart" />
          </div>
          <div className="description">
            <p>
              Hey there. <br />
              I'm Vincent, a front-end developer based in London.
            </p>
            <p>
              Everything started as kid in early 2000 when I got my first
              Pentium III 800Mhz. <br />I have been playing around for half a
              decade with Photoshop, Dreamweaver, Blender, RPG Maker (and
              Counter Strike!).
            </p>
            <p>
              However, Life led me to Finance, for too long... <br />
              But, here I am! Back on track and determined to follow my path.
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
        </div>
      </div>
    </section>
  );
};

export default About;
