import React, { Component } from "react";

import styles from "./recipe_top_bar.module.css";
import Search from "./Search";

export default class RecipeTopBar extends Component {
  constructor(props) {
    super();

    this.state = {
      onSearchClick: props.onSearchClick
    };
  }

  render() {
    return (
      <div className={styles.box}>
        <p style={{ position: "absolute", left: "2rem" }}>Recipes Finder!</p>

        <div style={{ margin: "auto" }}>
          <Search onClick={query => this.state.onSearchClick(query)}></Search>
        </div>
      </div>
    );
  }
}
