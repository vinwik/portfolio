import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Header.css";

import Fade from "react-reveal/Fade";

const Header = () => {
  return (
    <Fade>
      <header>
        <Logo className="logo" />
      </header>
    </Fade>
  );
};

export default Header;
