import React from "react";
import { ReactComponent as Angle } from "./angle-up.svg";
import Social from "../Social/Social";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <button
          className="angle-up"
          aria-label="Back to top"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Angle className="svg" />
        </button>
        <Social />
        <p className="copy">
          &copy; {new Date().getFullYear()} Made by <span>Vincent Wikart</span>.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
