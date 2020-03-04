import React, { Component } from "react";

import styles from "../css/education.module.css";

class Army extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ paddingBottom: "3rem" }}>{this.createArmyService()}</div>
    );
  }

  createArmyService() {
    return (
      <div className={styles.card_container}>
        <div class="card horizontal" style={{ margin: "0" }}>
          <div className={styles.card_title}>
            <div class="card-image">Field Intelligence Corps</div>
          </div>
          <div className={styles.title_border}></div>
          <div class="card-stacked">
            <div class="card-content">
              <div className={styles.card_subtitle}>Core Service</div>
              <div className={styles.card_description}>
                {this.getArmy_Row("Balloon Operator in an operational team.")}
                {this.getArmy_Row(
                  "Served in intelligence field expert positions."
                )}
                {this.getArmy_Row(
                  "Demanded teamwork, responsibility and creativity."
                )}
              </div>
            </div>

            <div class="card-content" style={{ paddingTop: "0" }}>
              <div className={styles.card_subtitle}>Commanding Positions</div>
              <div className={styles.card_description}>
                {this.getArmy_Row(
                  "100 soldiers under my command and responsibility."
                )}
                {this.getArmy_Row(
                  "Required passion, efficiency and collaborating."
                )}
                {this.getArmy_Row("Supported the Company commanding officer.")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getArmy_Row(text) {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        {this.getGradeIcon()}
        <span>{text}</span>
      </div>
    );
  }

  getGradeIcon() {
    return (
      <div
        class="material-icons"
        style={{
          color: "rgb(0, 128, 115)",
          fontSize: "1.75rem",
          userSelect: "none",
          marginBottom: "4px",
          marginRight: "0.5rem"
        }}
      >
        grade
      </div>
    );
  }
}

export default Army;
