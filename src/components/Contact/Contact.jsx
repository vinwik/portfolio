import React from "react";
import Title from "../Title/Title";
import "./Contact.css";

import ScrollableAnchor from "react-scrollable-anchor";

const Contact = () => {
  return (
    <ScrollableAnchor id="contact">
      <section className="contact">
        <div className="wrapper">
          <Title title="contact" />
          <div className="content">
            <div className="description">
              <h3>Convinced yet?</h3>
              <p>Let me know by clicking the button right down below.</p>
              <a href="mailto:vinwik@hotmail.com" className="btn">
                Call to Action
              </a>
            </div>
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  );
};

export default Contact;
