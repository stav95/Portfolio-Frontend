import React, { Component } from "react";
import Axios from "axios";
import "./todo-list/main.css";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      list_name: "",
      list_items: [],
      new_item: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    Axios.get("/todo-list").then(response => {
      console.log(response.data);
      this.setState({
        list_name: response.data.name,
        list_items: response.data.items
      });
    });
  };

  handleChange(event) {
    this.setState({ new_item: event.target.value });
  }

  render() {
    let list_items = this.state.list_items;
    let list_name = this.state.list_name;

    return (
      <div>
        <div className="box" id="heading">
          <h1>{list_name}</h1>
        </div>
        <div className="box">
          {list_items.map((value, idx) => (
            <form action="/delete" method="post">
              <div className="item">
                <input type="checkbox" name="checkbox" value={value} />
                <p>{value}</p>
              </div>
              <input type="hidden" name="listName" value={list_name}></input>
            </form>
          ))}

          <form class="item" action="/todo-list" method="post">
            <input
              type="text"
              name="new_item"
              placeholder="New Item"
              autocomplete="off"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              name="list"
              value={list_name}
            >
              +
            </button>
          </form>
        </div>
      </div>
    );
  }
}
