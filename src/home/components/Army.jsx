import React, { Component } from "react";

import styles from "../css/education.module.css";

class Army extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ paddingBottom: "3rem" }}>
        {this.createBSC()}
        {this.createCertification()}
      </div>
    );
  }

  createBSC() {
    return (
      <div className={styles.card_container}>
        <div class="card horizontal" style={{ margin: "0" }}>
          <div className={styles.card_title}>
            <div class="card-image">Bachelor of Science</div>
          </div>
          <div className={styles.title_border}></div>
          <div class="card-stacked">
            <div class="card-content">
              <div style={{ display: "flex", alignItems: "center" }}>
                <div className={styles.card_subtitle}>
                  Computer Science and Mathematics
                </div>
                <div style={{ fontSize: "1.25rem" }}>, Netanya</div>
              </div>
              <div className={styles.card_description}>
                {this.getBSC_Row("Current Grades Average: 93.")}
                {this.getBSC_Row("Honor & Award: Dean's list.")}
                {this.getBSC_Row("Magna Cum Laude.")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  getBSC_Row(text) {
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

  createCertification() {
    return (
      <div className={styles.card_container}>
        <div class="card horizontal" style={{ margin: "0" }}>
          <div className={styles.card_title}>
            <div class="card-image">Certification</div>
          </div>
          <div className={styles.title_border}></div>
          <div class="card-stacked">
            <div class="card-content">
              <div className={styles.card_subtitle}>Microsoft</div>

              <div className={styles.card_description}>
                {this.getBSC_Row("Exam 70-483: Programming in C#.")}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Army;
