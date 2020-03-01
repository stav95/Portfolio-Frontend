import React, { Component } from "react";
import NavBar from "./NavBar";

import $ from "jquery";
import styles from "./home.module.css";
import About from "./About";
import Projects from "./Projects";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    function currentSection(elem) {
      return $(window).scrollTop() + 100 >= $(elem).offset().top;
    }

    $(window).scroll(function() {
      if (currentSection($("#skills"))) {
        addActive(3);
      } else if (currentSection($("#projects"))) {
        addActive(2);
      } else if (currentSection($("#about"))) {
        addActive(1);
      } else if (currentSection($("#intro"))) {
        addActive(0);
      }
    });

    function addActive(rowIndex) {
      for (let i = 1; i < 10; i++) {
        if ($(`#row_${i}`).hasClass(styles.active)) {
          if (rowIndex != i) {
            $(`#row_${i}`).removeClass(styles.active);
          }
        }
      }

      $(`#row_${rowIndex}`).addClass(styles.active);
    }
  }

  render() {
    return (
      <div
        style={{
          height: "100%",
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 300
        }}
      >
        <div className={styles.nav_bar}>
          <NavBar></NavBar>
        </div>
        <div className={styles.active}></div>
        <div
          style={{
            position: "absolute",
            left: "12rem",
            height: "100%",
            width: "calc(100% - 12rem)"
          }}
        >
          <section id="intro" className={styles.image_bg}>
            <div className={styles.overlay}></div>
            <div className={styles.quote_container}>
              <div className={styles.text}>
                <span>Every problem </span>
                <span className={styles.quote_mark}>has a solution</span>
              </div>
              <div className={styles.text}>
                <span>You just have to be creative enough to </span>
                <span className={styles.quote_underline}>find it.</span>
              </div>
            </div>
          </section>

          <section id="about">
            <div className={styles.section_display}>
              <span className={styles.section_display_text}>ABOUT</span>
            </div>
            <div className={styles.bg}>
              <About></About>
            </div>
          </section>

          <section id="projects">
            <div className={styles.section_display}>
              <span className={styles.section_display_text}>PROJECTS</span>
            </div>
            <div className={styles.bg}>
              <Projects></Projects>
            </div>
          </section>

          <section id="skills">
            <div className={styles.section_display}>
              <span className={styles.section_display_text}>SKILLS</span>
            </div>
            <div className={styles.bg}>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
              <div>ss</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
