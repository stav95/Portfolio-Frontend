import React, { Component } from "react";

import styles from "./recipe.module.css";
import RecipeTopBar from "./RecipeTopBar";
import ResultRecipe from "./ResultRecipe";

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
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div style={{ width: "25%", height: "100%", background: "white" }}>
              <ResultRecipe
                label="Bread Baking: 70-Percent Hydration Bread"
                image="https://www.edamam.com/web-img/372/372186f5e6bec5505204bef2364a80f2.JPG"
              ></ResultRecipe>
            </div>
            <div
              style={{ width: "50%", height: "100%", background: "red" }}
            ></div>
            <div
              style={{ width: "25%", height: "100%", background: "green" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
