import React, { Component } from "react";

import styles from "../css/skill.module.css";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLast: props.isLast,
      title: props.title,
      data: props.data
    };
  }
  render() {
    return (
      <div
        className={styles.card_container}
        style={{ paddingBottom: this.state.isLast ? "3rem" : "0" }}
      >
        <div class="card horizontal" style={{ margin: "0" }}>
          <div className={styles.card_title}>
            <div class="card-image">{this.state.title}</div>
          </div>
          <div className={styles.title_border}></div>
          <div class="card-stacked">
            <div class="card-content">
              <table>
                <tbody>
                  <tr>
                    {this.state.data.map((pair, idx) => {
                      return (
                        <td key={idx} className={styles.td_skill}>
                          <img
                            src={pair.img}
                            className={styles.img_skill}
                          ></img>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    {this.state.data.map((pair, idx) => {
                      return (
                        <td key={idx} className={styles.td_skill}>
                          <span>{pair.title}</span>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
