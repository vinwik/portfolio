import React from "react";
import LiveBtn from "./LiveBtn/LiveBtn";
import LivePreview from "./LivePreview/LivePreview";
import weatherapp from "./weather-app.jpg";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="wrapper">
        <h1 className="section-title">Projects</h1>
        <div className="content">
          <div className="description">
            <h3>Weather App</h3>
            <p>
              Nice Home page with weather real time weather, access to my main
              Social Apps, and Search bar for Google and YouTube
            </p>
            <ul>
              <li>Vanilla JS</li>
              <li>OpenWeather API</li>
              <li>ES8 Async/Await</li>
            </ul>
            <div>
              <a
                href="https://vinwik.github.io/weather-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiveBtn />
              </a>
              <a
                href="https://github.com/vinwik/weather-app"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
          <a
            href="https://vinwik.github.io/weather-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="screenshot"
          >
            <img
              className="img-fluid"
              src={weatherapp}
              alt="weather-app"
              target="_blank"
              rel="noreferrer"
            />
            <h3 className="inner-text">
              <LivePreview />
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
