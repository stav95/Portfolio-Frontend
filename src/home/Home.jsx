import React, { Component } from "react";
import NavBar from "./NavBar";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <div
          style={{
            width: "12rem",
            height: "100%",
            borderCollapse: "collapse",
            border: "1px solid black"
          }}
        >
          <NavBar></NavBar>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Home;
