import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Skillset from "./Skillset/Skillset";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "./App.css";

import Fade from "react-reveal/Fade";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {/* <Fade fraction={0.05}> */}
        <Home />
        <About />
        <Skillset />
        <Projects />
        <Contact />
        <Footer />
        {/* </Fade> */}
      </React.Fragment>
    );
  }
}

export default App;
