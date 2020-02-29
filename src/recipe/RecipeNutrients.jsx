import React, { Component } from "react";

import styles from "./recipe_nutrients.module.css";

export default class RecipeNutrients extends Component {
  constructor(props) {
    super();

    this.state = {
      nutrients: props.nutrients
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nutrients: nextProps.nutrients
    });
  }

  render() {
    let nut = this.state.nutrients;
    let keys = Object.keys(this.state.nutrients);

    return (
      <div>
        <p className={styles.title}>Nutrients</p>
        <div style={{ marginBottom: "2rem" }}>
          <table className={styles.table_nutrients}>
            <tr>
              <td>Label</td>
              <td>Quantity</td>
              <td>Unit</td>
            </tr>
            {keys.map((key, idx) => {
              return (
                <tr key={idx}>
                  <td>{nut[key]["label"]}</td>
                  <td>{parseFloat(nut[key]["quantity"]).toFixed(2)}</td>
                  <td>{nut[key]["unit"]}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
