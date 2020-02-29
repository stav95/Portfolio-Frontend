import React, { Component } from "react";

import styles from "./recipe_top_bar.module.css";
import Search from "./Search";

import ReactLoading from "react-loading";

import chef_512 from "./chef_512.png";

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
        <div className={styles.title_image_container}>
          <img
            src={chef_512}
            style={{ height: "3rem", margin: "0rem 1rem"}}
          />
          <div style={{ fontSize: "1.5rem", fontWeight: "500" }}>
            Recipes Finder
          </div>
        </div>

        <div style={{ margin: "auto", display: "flex", alignItems: "center" }}>
          <Search onClick={query => this.state.onSearchClick(query)}></Search>
          <div
            id="loading_search"
            style={{ margin: "auto 2rem", display: "none" }}
          >
            <ReactLoading
              type="spinningBubbles"
              color="#000000"
              width="2.5rem"
              height="2.5rem"
            ></ReactLoading>
          </div>
        </div>
      </div>
    );
  }
}
