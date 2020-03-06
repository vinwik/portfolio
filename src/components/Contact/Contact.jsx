import React from "react";
import Title from "../Title/Title";
import "./Contact.css";

import ScrollableAnchor from "react-scrollable-anchor";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <ScrollableAnchor id="contact">
      <section className="contact">
        <div className="wrapper">
          <Title title="contact" />
          <div className="content">
            <Fade bottom>
              <div className="description">
                <h3>Convinced yet?</h3>
                <p>Let me know by clicking the button right down below.</p>
                <a href="mailto:vinwik@hotmail.com" className="btn">
                  Call to Action
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Contact;
