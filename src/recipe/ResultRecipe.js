import React, { Component } from "react";

export default class ResultRecipe extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", margin: "1rem" }}>
          <img
            src={this.props.image}
            style={{ borderRadius: "50%", maxWidth: "4rem", maxHeight: "4rem" }}
          ></img>
          <p>{this.props.label}</p>
        </div>
      </div>
    );
  }
}
