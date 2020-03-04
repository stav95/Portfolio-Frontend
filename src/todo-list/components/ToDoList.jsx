import {
  getList as API_getList,
  addNewItem as API_addNewItem,
  deleteItem as API_deleteItem,
  changeCheckbox as API_changeCheckbox
} from "../external/API";

import React, { Component } from "react";

import Fab from "@material-ui/core/Fab";
import Checkbox from "@material-ui/core/Checkbox";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import styles from "../css/todo_list.module.css";
import trash_64 from "../pictures/trash_64.png";

export default class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      list_name: "",
      list_items: [],
      new_item: ""
    };

    this.handleChangeAddItem = this.handleChangeAddItem.bind(this);
    this.handleChangeListName = this.handleChangeListName.bind(this);
    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);

    this.addNewItem = this.addNewItem.bind(this);
  }

  getList() {
    API_getList(this.state.list_name, res => this.handleNewData(res));
  }

  addNewItem() {
    API_addNewItem(this.state.list_name, this.state.new_item, res =>
      this.handleNewData(res)
    );
  }

  deleteItem(item_id) {
    API_deleteItem(this.state.list_name, item_id, res =>
      this.handleNewData(res)
    );
  }

  handleNewData(res) {
    if (res && res.data && res.data !== "") {
      this.setState({
        list_items: res.data.list_items
      });
    }
  }

  handleChangeAddItem(event) {
    this.setState({
      new_item: event.target.value
    });
  }

  handleChangeListName(event) {
    this.setState(
      {
        list_name: event.target.value
      },
      this.getList
    );
  }

  handleChangeCheckbox(item_id) {
    API_changeCheckbox(this.state.list_name, item_id, res =>
      this.handleNewData(res)
    );
  }

  render() {
    document.getElementById("root_html").className = styles.html;

    const theme = createMuiTheme({
      palette: {
        primary: { main: "#a683e3" /*purple[500]*/ } // Purple and green play nicely together.
      },
      typography: { useNextVariants: true }
    });

    let list_items = this.state.list_items;
    let list_name = this.state.list_name;

    return (
      <div className={styles.page_bg}>
        <div className={styles.box_title} id="heading">
          <input
            type="text"
            className={[styles.input_text, styles.list_name].join(" ")}
            name="new_item"
            placeholder="Search (e.g Food)"
            value={list_name}
            autoComplete="off"
            onChange={this.handleChangeListName}
          />
        </div>
        <div className={styles.box_list}>
          {list_items.map((item, idx) => (
            <div>
              <div className={styles.item}>
                <div
                  style={{ display: "flex", cursor: "pointer" }}
                  onClick={() => this.handleChangeCheckbox(item.item.id)}
                >
                  <MuiThemeProvider theme={theme}>
                    <Checkbox
                      id={item.item.id}
                      checked={item.item.completed}
                      color="primary"
                    ></Checkbox>
                  </MuiThemeProvider>
                  <p
                    className={
                      item.item.completed
                        ? styles.completed
                        : styles.not_completed
                    }
                  >
                    {item.item.value}
                  </p>
                </div>
                <div className={styles.img_wrapper}>
                  <img
                    src={trash_64}
                    onClick={() => this.deleteItem(item.item.id)}
                  />
                </div>
              </div>
              <input type="hidden" name="listName" value={list_name}></input>
            </div>
          ))}

          <div className={styles.item}>
            <input
              type="text"
              className={styles.input_text}
              name="new_item"
              placeholder="New Item"
              autoComplete="off"
              onChange={this.handleChangeAddItem}
            />

            <MuiThemeProvider theme={theme}>
              <Fab
                color="primary"
                onClick={this.addNewItem}
                style={{ backgroundColor: "#a683e3" }}
              >
                <span class="material-icons" style={{ fontSize: "2rem" }}>
                  add
                </span>
              </Fab>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}
