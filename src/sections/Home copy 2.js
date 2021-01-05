import React, { Component } from "react";
import "./Home.css";
import Confetti from "react-confetti";
import ParticlesBg from "./ParticlesBg";

class Home extends Component {
  state = { width: window.innerWidth, height: window.maxHeight };

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.maxHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          background: "#000",
          paddingTop: "6rem",
          width: "100%",
          height: "100vh",
        }}
        id="home"
      >
        <ParticlesBg />
        <p className="h1 textStyle">
          <p>Hello, I am Pratheep.</p>
          <p>Welcome to my portfolio website.</p>
          <a
            style={{ textDecoration: "none" }}
            className="homebtn"
            href="#about-me"
          >
            Click here to explore!!!
          </a>
        </p>
      </div>
    );
  }
}

export default Home;
