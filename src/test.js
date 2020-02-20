import React, { Component } from "react";
import Axios from "axios";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      tmp: "nothing yet"
    };
  }

  componentDidMount = () => {
    Axios.get("/test").then(response => {
      console.log(response);
      this.setState({
        tmp: "completed"
      });
    });
  };

  render() {
    return (
      <div>
        <h1>The response is: {this.state.tmp}</h1>
      </div>
    );
  }
}
