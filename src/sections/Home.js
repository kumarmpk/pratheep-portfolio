import React, { Component } from "react";
import "./Home.css";
import Snowfall from "react-snowfall";

class Home extends Component {
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
        <Snowfall snowflakeCount={500} />

        <p className="h1 textStyle">
          Hello, I am Pratheep. Welcome to my portfolio website.{" "}
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
