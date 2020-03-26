import React, { Component } from "react";
import axios from "axios";
import cn from "classnames";
import $ from "jquery";

import NavBar from "./NavBar";

import styles from "../css/home.module.css";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Army from "./Army";
import CreateContact from "./Contact";
import { sendLog } from "../external/API";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      client: null,
      width: 0,
      height: 0
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  getClientIP() {
    axios
      .get("http://geoip-db.com/json/")
      .then(res => {
        this.setState({
          client: res.data
        });

        sendLog(res.data, "Load Home");
      })
      .catch(err => {
        console.log("ERRRROR - " + err);
        sendLog(this.state.client, "Load Home");
      });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    console.log(process.env.NODE_ENV);
    this.getClientIP();

    function currentSection(elem) {
      if (
        $(document).height() - document.body.scrollHeight - 100 <=
        $(window).scrollTop()
      ) {
        return true;
      } else {
        return $(window).scrollTop() + 100 >= $(elem).offset().top;
      }
    }

    $(window).scroll(function() {
      if (currentSection($("#contact"))) {
        addActive(6);
      } else if (currentSection($("#army"))) {
        addActive(5);
      } else if (currentSection($("#education"))) {
        addActive(4);
      } else if (currentSection($("#skills"))) {
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

  updateWindowDimensions() {
    this.setState(
      {
        width: window.innerWidth,
        height: window.innerHeight
      },
      () => {
        console.log(this.state.width + " - " + this.state.height);
      }
    );
  }

  render() {
    const maxWidth = 900;

    let open_menu_visibility =
      this.state.width > maxWidth ? "hidden" : "visible";

    const home_nav_bar = document.getElementById("home_nav_bar");

    if (home_nav_bar != null) {
      open_menu_visibility =
        home_nav_bar.style.zIndex == "1" ? "hidden" : open_menu_visibility;
    }

    return (
      <div
        style={{
          height: "100%",
          fontFamily: '"Roboto", sans-serif',
          fontWeight: 300
        }}
      >
        <div
          className={styles.open_menu}
          style={{
            visibility: open_menu_visibility
          }}
          onClick={() => {
            document.getElementById("home_nav_bar").style.zIndex = "1";
            document.getElementById("close_nav_bar").style.visibility =
              "visible";
          }}
        >
          <span class="material-icons" style={{ fontSize: "4rem" }}>
            reorder
          </span>
        </div>

        <div id="home_nav_bar" className={styles.nav_bar}>
          <NavBar client={this.state.client}></NavBar>
        </div>

        <div
          className={cn(
            styles.container,
            this.state.width > maxWidth ? styles.container_with_nav : ""
          )}
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
              <Projects client={this.state.client}></Projects>
            </div>
          </section>

          <section id="skills">
            <div className={styles.section_display}>
              <span className={styles.section_display_text}>SKILLS</span>
            </div>
            <div className={styles.bg}>
              <Skills></Skills>
            </div>
          </section>

          <section id="education">
            <div className={styles.section_display}>
              <span className={styles.section_display_text}>EDUCATION</span>
            </div>
            <div className={styles.bg}>
              <Education></Education>
            </div>
          </section>

          <section id="army">
            <div className={styles.section_display}>
              <span className={styles.section_display_text}>ARMY SERVICE</span>
            </div>
            <div className={styles.bg}>
              <Army></Army>
            </div>
          </section>

          <section id="contact">
            <div className={styles.section_display}>
              <span className={styles.section_display_text}>CONTACT</span>
            </div>
            <div className={styles.bg}>
              <div>
                <CreateContact client={this.state.client}></CreateContact>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
