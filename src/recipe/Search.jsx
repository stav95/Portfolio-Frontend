import React, { Component } from "react";

import styles from "./search.module.css";
import search_32 from "./search_32.png";

export default class Search extends Component {
  constructor(props) {
    super();

    this.state = { query: "", onClick: props.onClick };

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div style={{ display: "flex", height: "2.75rem" }}>
        <input
          type="text"
          className={styles.input_search}
          placeholder="Search over Million recipes!"
          onChange={this.handleQueryChange}
        ></input>
        <div
          className={styles.search_box}
          onClick={() => this.state.onClick(this.state.query)}
        >
          <img
            src={search_32}
            style={{ marginLeft: "1rem", height: "1.25rem" }}
          ></img>
          <p className={styles.search_text}>Search</p>
        </div>
      </div>
    );
  }
}
