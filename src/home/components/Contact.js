import React, { Component } from "react";

import Fab from "@material-ui/core/Fab";
import { Tooltip } from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import styles from "../css/contact.module.css";

export default function CreateContact() {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#795548" /*purple[500]*/ } // Purple and green play nicely together.
    },
    typography: { useNextVariants: true }
  });

  return (
    <div className={styles.container}>
      <MuiThemeProvider theme={theme}>
        <div className={styles.fab}>
          <a
            href="mailto:stav.dev95@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="Email" placement="top">
              <Fab color="primary" style={{ backgroundColor: "#795548" }}>
                <span class="material-icons">mail</span>
              </Fab>
            </Tooltip>
          </a>
          <a
            href="mailto:stav.dev95@gmail.com"
            target="_blank"
            className={styles.link}
          >
            <div>stav.dev95@gmail.com</div>
          </a>
        </div>
        <div className={styles.fab}>
          <a
            href="https://github.com/stav95"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="View my Github page" placement="top">
              <Fab color="primary"  style={{ backgroundColor: "#795548" }}>
                <span class="material-icons">code</span>
              </Fab>
            </Tooltip>
          </a>
          <a
            href="https://github.com/stav95"
            target="_blank"
            className={styles.link}
          >
            <div>github.com/stav95</div>
          </a>
        </div>
        <div className={styles.fab}>
          <a
            href="https://il.linkedin.com/in/stav-yosef-229177169"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Tooltip title="Veiw my Linkedin page" placement="top">
              <Fab color="primary"  style={{ backgroundColor: "#795548" }}>
                <span class="material-icons">person</span>
              </Fab>
            </Tooltip>
          </a>
          <a
            href="https://il.linkedin.com/in/stav-yosef-229177169"
            target="_blank"
            className={styles.link}
          >
            <div>linkedin.com/in/stav-yosef-229177169</div>
          </a>
        </div>
      </MuiThemeProvider>
    </div>
  );
}
