import React, { Component } from "react";

import styles from "./row_result_recipe.module.css";

export default class RowResultRecipe extends Component {
  constructor(props) {
    super();
    console.log("LOG - " + props.selected);
    this.state = {
      label: props.label,
      image: props.image,
      selected: props.selected,
      onClickRecipe: props.onClickRecipe
    };

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  selectRecipe() {
    this.setState(
      {
        selected: "false"
      },
      this.state.onClickRecipe
    );
  }

  render() {
    return (
      <div>
        <div
          onClick={() => this.selectRecipe()}
          className={[
            styles.row,
            this.state.selected == "true" ? styles.selected : ""
          ].join(" ")}
        >
          <img src={this.state.image} className={styles.circle_img}></img>
          <p
            className={[
              styles.label,
              this.state.selected == "true" ? styles.selected : ""
            ].join(" ")}
          >
            {this.state.label}
          </p>
        </div>
      </div>
    );
  }
}
