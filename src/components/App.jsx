import React, { Component } from "react";
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
