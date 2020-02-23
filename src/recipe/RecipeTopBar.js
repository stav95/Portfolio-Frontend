import React, { Component } from "react";

import styles from "./recipe_top_bar.module.css";
import Search from "./Search";

export default class RecipeTopBar extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className={styles.box}>
        {/* <div style={{ position: "relative", width: "100%" }}> */}
        <p style={{ position: "absolute", left: "2rem" }}>Recipes Finder!</p>

        <div style={{ margin: "auto" }}>
          {/* <div className={styles.center_div}> */}
          <Search></Search>
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}
