import React, { Component } from "react";

import styles from "./result_recipe.module.css";
// import cx from "classnames";

export default class ResultRecipe extends Component {
  constructor(props) {
    super();

    this.state = {
      image: props.image,
      label: props.label,
      healthGains: props.healthGains,
      calories: props.calories,
      totalWeight: props.totalWeight,
      totalTime: props.totalTime,
      ingredients: props.ingredients
    };
  }

  render() {
    return (
      <div>
        <div className={styles.title}>{this.state.label}</div>
        <div className={styles.summary_container}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={this.state.image}></img>
          </div>
          <div className={styles.summary_container_text}>
            <div className={styles.property}>
              Calories: {Math.round(this.state.calories)}
            </div>

            <div className={styles.property}>Health Gains:</div>

            {this.state.healthGains.map((gain, idx) => {
              return (
                <div className={styles.row_list} key={idx}>
                  {gain}
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ textAlign: "left", margin: "2rem" }}>
          <div className={styles.property}>Ingredients:</div>
          {this.state.ingredients.map((ingredient, idx) => {
            return (
              <div className={styles.row_list} key={idx}>
                {ingredient}
              </div>
            );
          })}
          <div style={{ textAlign: "center" }}>
            <a className={styles.instructions} href="#">
              Instructions
            </a>
          </div>
        </div>
      </div>
    );
  }
}
