import React, { Component } from "react";

import styles from "./recipe.module.css";
import RecipeTopBar from "./RecipeTopBar";
import RowResultRecipe from "./RowResultRecipe";
import ResultRecipe from "./ResultRecipe";
import RecipeNutrients from "./RecipeNutrients";

import axios from "axios";

export default class Recipe extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
      indexSelected: -1
    };

    this.makeNewRequest = this.makeNewRequest.bind(this);
    this.onClickRecipe = this.onClickRecipe.bind(this);
  }

  makeNewRequest(query) {
    alert(query);
    const params = new URLSearchParams();
    params.append("query", query);

    axios({
      method: "POST",
      url: "/recipe-finder",
      data: params
    })
      .then(result => {
        alert("done!");
        console.log(result);
        console.log(result.data[0]["label"]);
        this.setState({
          recipes: result.data
        });
      })
      .catch(err => {});
  }

  onClickRecipe(index) {
    this.setState({
      indexSelected: index
    });
  }

  render() {
    document.getElementById("root_html").className = styles.html;

    let r = null;
    if (this.state.indexSelected > -1) {
      r = this.state.recipes[this.state.indexSelected];
    }

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div className={styles.box}>
          <RecipeTopBar
            onSearchClick={query => this.makeNewRequest(query)}
          ></RecipeTopBar>
          <div style={{ width: "100%", height: "100%", display: "flex" }}>
            <div style={{ width: "25%", height: "100%", background: "white" }}>
              {this.state.recipes.map((recipe, idx) => {
                return (
                  <RowResultRecipe
                    key={idx}
                    label={recipe.label}
                    image={recipe.image}
                    healthGains={recipe.healthLabels}
                    ingredients={recipe.ingredientLines}
                    calories={recipe.calories}
                    selected={
                      idx == this.state.indexSelected ? "true" : "false"
                    }
                    onClickRecipe={() => this.onClickRecipe(idx)}
                  ></RowResultRecipe>
                );
              })}
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                background: "rgb(245, 243, 241)"
              }}
            >
              {r !== null ? (
                <ResultRecipe
                  label={r.label}
                  image={r.image}
                  healthGains={r.healthLabels}
                  calories={r.calories}
                  ingredients={r.ingredientLines}
                ></ResultRecipe>
              ) : (
                ""
              )}
            </div>
            <div style={{ width: "25%", height: "100%", background: "white" }}>
              {r !== null ? (
                <RecipeNutrients nutrients={r.totalNutrients}></RecipeNutrients>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
