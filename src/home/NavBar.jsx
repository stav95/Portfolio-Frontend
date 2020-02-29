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
        <a href="#intro" style={{ textDecoration: "none", color: "black" }}>
          <div className={styles.name_container}>
            <div className={styles.name_text}>Stav</div>
            <div className={styles.name_text}>Yosef</div>
            <div className={styles.fs_text}>Full Stack Developer</div>
          </div>
        </a>

        <NavBarRow
          id="row_1"
          section="#about"
          image="person"
          text="About"
          color="#008073"
        ></NavBarRow>
        <NavBarRow
          id="row_2"
          section="#projects"
          image="cloud"
          text="Projects"
          color="#3f51b5"
        ></NavBarRow>
        <NavBarRow
          id="row_3"
          section="#skills"
          image="equalizer"
          text="Skills"
          color="#9c27b0"
        ></NavBarRow>
        <NavBarRow
          id="row_3"
          section="#education"
          image="school"
          text="Education"
          color="#00bcd4"
        ></NavBarRow>
        <NavBarRow
          id="row_4"
          section="#contact"
          image="mail"
          text="Contact"
          color="#F44336"
        ></NavBarRow>
        <NavBarRow
          id="row_5"
          section="#resume"
          image="description"
          text="Resume"
          color="#666666"
        ></NavBarRow>
      </div>
    );
  }
}

export default NavBar;
