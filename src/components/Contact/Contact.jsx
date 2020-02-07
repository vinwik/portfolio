import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="wrapper">
        <h1 className="section-title">Contact</h1>
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
  );
};

export default Contact;
