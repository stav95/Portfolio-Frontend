import React, { Component } from "react";

import RecipeTopBar from "./RecipeTopBar";
import RowResultRecipe from "./RowResultRecipe";
import ResultRecipe from "./ResultRecipe";
import RecipeNutrients from "./RecipeNutrients";

import axios from "axios";

import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

import styles from "../css/recipe.module.css";

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
    const params = new URLSearchParams();
    params.append("query", query);

    document.getElementById("loading_search").style.display = "";

    axios({
      method: "POST",
      url: 'http://64.227.30.86:3001/recipe-finder',
      url: "/",
      data: params
    })
      .then(result => {
        document.getElementById("loading_search").style.display = "none";

        let changeIndex = false;

        if (
          result != null &&
          result.data != null &&
          result.data.length > 0 &&
          this.state.indexSelected === -1
        ) {
          changeIndex = true;
        }

        this.setState({
          recipes: result.data,
          indexSelected: changeIndex ? 0 : this.state.indexSelected
        });
      })
      .catch(err => {
        document.getElementById("loading_search").style.display = "none";
      });
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
              <PerfectScrollbar>
                <div style={{ marginBottom: "1rem" }}>
                  {this.state.recipes.map((recipe, idx) => {
                    return (
                      <RowResultRecipe
                        key={idx}
                        rowIndex={idx}
                        label={recipe.label}
                        image={recipe.image}
                        healthGains={recipe.healthLabels}
                        ingredients={recipe.ingredientLines}
                        calories={recipe.calories}
                        selected={
                          this.state.indexSelected == idx ? "true" : "false"
                        }
                        onClickRecipe={() => this.onClickRecipe(idx)}
                      ></RowResultRecipe>
                    );
                  })}
                </div>
              </PerfectScrollbar>
            </div>
            <div
              style={{
                width: "50%",
                height: "100%",
                background: "rgb(245, 243, 241)"
              }}
            >
              <PerfectScrollbar>
                {r !== null ? (
                  <ResultRecipe
                    label={r.label}
                    url={r.url}
                    image={r.image}
                    healthGains={r.healthLabels}
                    calories={r.calories}
                    ingredients={r.ingredientLines}
                  ></ResultRecipe>
                ) : (
                  ""
                )}
              </PerfectScrollbar>
            </div>
            <div style={{ width: "25%", height: "100%", background: "white" }}>
              {r !== null ? (
                <PerfectScrollbar>
                  <RecipeNutrients
                    nutrients={r.totalNutrients}
                  ></RecipeNutrients>
                </PerfectScrollbar>
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
