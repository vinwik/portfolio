import React from "react";
import { ReactComponent as Angle } from "./angle-up.svg";
import Social from "../Social/Social";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <a href="#landing" className="svg" aria-label="Back to top">
          <Angle className="svg" />
        </a>
        <Social />
        <p className="copy">
          ©{new Date().getFullYear()} Made by <span>Vincent Wikart</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
