import React, { Component } from "react";

import styles from "../css/home.module.css";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.about_text_container}>
        <div className={styles.flow_text}>
          Passionate and motivated Computer Science and Mathematics developer seeking an entry-level software development engineering
          position.
        </div>
        <div className={styles.flow_text} style={{ paddingTop: "1.5rem" }}>
          Skilled in a wide range of programming and computer applications.
          Quick learner and solution-oriented thinker eager to learn and develop
          in an innovative environment.
        </div>
        <div
          className={styles.flow_text}
          style={{ paddingTop: "1rem", fontWeight: "500" }}
        >
          Available for a full-time job.
        </div>
      </div>
    );
  }
}

export default About;
