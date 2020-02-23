import React, { Component } from "react";

import styles from "./search.module.css";
import search_32 from "./search_32.png";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", height: "2.75rem" }}>
        <input
          type="text"
          className={styles.input_search}
          placeholder="Search over Million recipes!"
        ></input>
        <div className={styles.search_box}>
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
