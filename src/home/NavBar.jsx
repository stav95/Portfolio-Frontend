import React, { Component } from "react";

import styles from "./nav_bar.module.css";
import NavBarRow from "./NavBarRow";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.test}>
        <div className={styles.name_container}>
          <div className={styles.name_text}>Stav</div>
          <div className={styles.name_text}>Yosef</div>
          <div className={styles.fs_text}>Full Stack Developer</div>
        </div>

        <NavBarRow
          id="row_1"
          image="person"
          text="About"
          color="#008073"
        ></NavBarRow>
        <div>Projects</div>
        <div>Skills</div>
        <div>Education</div>
        <div>Contact</div>
        <div>Resume</div>
      </div>
    );
  }
}

export default NavBar;
