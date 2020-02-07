import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
