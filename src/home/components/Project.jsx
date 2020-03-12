import React, { Component } from "react";

import styles from "../css/project.module.css";

import Fab from "@material-ui/core/Fab";
import { Tooltip } from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { sendLog } from "../external/API";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      height: props.height,
      isFront: props.isFront,
      widthCard: props.widthCard,
      title: props.title,
      image: props.image,
      description: props.description,
      data: props.data,
      onClick: props.onClick,
      client: props.client
    };

    this.getFrontCard = this.getFrontCard.bind(this);
    this.getBackCard = this.getBackCard.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      height: nextProps.height,
      client: nextProps.client
    });
  }

  getFrontCard() {
    return (
      <div
        id={`project_${this.state.index}_front`}
        style={{ padding: "3rem 0" }}
      >
        <div
          className={styles.card_container}
          style={{ maxWidth: this.state.widthCard, cursor: "pointer" }}
          onClick={event => this.state.onClick(event)}
        >
          <img
            src={this.state.image}
            style={{
              maxWidth: "100%",
              borderRadius: "0.5rem",
              visibility: "visible"
            }}
          />

          <div style={{ position: "relative" }}>
            <div className={styles.card_title_front}>{this.state.title}</div>
            <div className={styles.card_launch}>
              <span class="material-icons">launch</span>
            </div>
          </div>
          <div className={styles.card_description}>
            {this.state.description}
          </div>
        </div>
      </div>
    );
  }

  getBackCard() {
    const theme = createMuiTheme({
      palette: {
        primary: { main: "#795548" /*purple[500]*/ } // Purple and green play nicely together.
      },
      typography: { useNextVariants: true }
    });

    return (
      <div style={{ padding: "3rem 0" }}>
        <div
          className={styles.card_container}
          style={{
            position: "relative",
            maxWidth: this.state.widthCard,
            height: `${this.state.height}px`,
            overflow: "hidden"
          }}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={event => this.state.onClick(event)}
          >
            <div className={styles.card_title_back}>Accomplishments</div>
            <div
              style={{
                marginTop: "1.5rem",
                fontSize: "1.15rem",
                textAlign: "left"
              }}
            >
              {this.state.data.accomplishments.map((acc, idx) => {
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1rem"
                    }}
                  >
                    <span
                      class="material-icons"
                      style={{
                        marginLeft: "2rem",
                        marginRight: "0.5rem",
                        color: "#008073",
                        marginBottom: "4px"
                      }}
                    >
                      done
                    </span>
                    <div>{acc}</div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                marginTop: "2rem"
              }}
            >
              {this.state.data.logos.map((logo, idx) => {
                return (
                  <img
                    key={idx}
                    src={logo}
                    style={{ maxHeight: "6rem", margin: "0.5rem 2.5rem" }}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.links_container}>
            <MuiThemeProvider theme={theme}>
              <a
                href={this.state.data.url.demo}
                target="_blank"
                style={{ textDecoration: "none" }}
                onClick={() =>
                  sendLog(
                    this.state.client,
                    "Open Demo: " + this.state.data.url.demo
                  )
                }
              >
                <Tooltip title="View Online" placement="top">
                  <Fab
                    color="primary"
                    style={{
                      marginRight: "1.25rem",
                      backgroundColor: "#795548"
                    }}
                  >
                    <span class="material-icons">visibility</span>
                  </Fab>
                </Tooltip>
              </a>
              <a
                href={this.state.data.url.source_code}
                target="_blank"
                style={{ textDecoration: "none" }}
                onClick={() =>
                  sendLog(
                    this.state.client,
                    "Open Source Code: " + this.state.data.url.source_code
                  )
                }
              >
                <Tooltip title="View Source Code" placement="top">
                  <Fab color="primary" style={{ backgroundColor: "#795548" }}>
                    <span class="material-icons">code</span>
                  </Fab>
                </Tooltip>
              </a>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return this.state.isFront ? this.getFrontCard() : this.getBackCard();
  }
}

export default Project;
