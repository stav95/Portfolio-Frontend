import React, { Component } from "react";

import styles from "./recipe.module.css";
import RecipeTopBar from "./RecipeTopBar";

export default class Recipe extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    document.getElementById("root_html").className = styles.html;

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div className={styles.box}>
          <RecipeTopBar></RecipeTopBar>
        </div>
      </div>
    );
  }
}
