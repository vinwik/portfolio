import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Navbar.css";

import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    // <Fade>
    <nav className="navbar">
      <Logo className="logo" />
    </nav>
    // </Fade>
  );
};

export default Navbar;
