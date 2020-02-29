import React, { Component } from "react";

import styles from "./row_result_recipe.module.css";

export default class RowResultRecipe extends Component {
  constructor(props) {
    super();

    this.state = {
      rowIndex: props.rowIndex,
      label: props.label,
      image: props.image,
      selected: props.selected,
      onClickRecipe: props.onClickRecipe
    };

    this.selectRecipe = this.selectRecipe.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      rowIndex: nextProps.rowIndex,
      label: nextProps.label,
      image: nextProps.image,
      selected: nextProps.selected,
      onClickRecipe: nextProps.onClickRecipe
    });
  }

  selectRecipe() {
    this.setState(
      {
        selected: this.state.selected
      },
      this.state.onClickRecipe
    );
  }

  render() {
    return (
      <div>
        <div
          onClick={() => this.state.onClickRecipe(this.state.rowIndex)}
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
