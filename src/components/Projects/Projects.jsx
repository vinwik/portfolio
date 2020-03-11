import React from "react";
import "./Projects.css";

import { projectsData } from "./data";
import Title from "../Title/Title";

import LiveBtn from "./LiveBtn/LiveBtn";
import LivePreview from "./LivePreview/LivePreview";

import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    <ScrollableAnchor id="projects">
      <section className="projects">
        <div className="wrapper">
          <Title title="projects" />
          {projectsData.map(project => {
            const { title, description, infoList, url, repo, img } = project;

            return (
              <div className="content" key={title}>
                <div className="description">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <ul>
                    {infoList.map(li => {
                      const { info } = li;
                      return <li key={info}>{info}</li>;
                    })}
                  </ul>
                  <div>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <LiveBtn />
                    </a>
                    {// will not show source code link if no repo
                    repo && (
                      <a
                        href={repo}
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="screenshot"
                >
                  <img
                    className="img-fluid"
                    src={img}
                    alt="weather-app"
                    target="_blank"
                    rel="noreferrer"
                  />
                  <h3 className="inner-text">
                    <LivePreview />
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Projects;
