import React, { Component } from "react";
import Axios from "axios";
import "./todo-list/main.css";

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      list_name: "",
      list_items: []
    };
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

          <form class="item" action="/" method="post">
            <input
              type="text"
              name="newItem"
              placeholder="New Item"
              autocomplete="off"
            />
            <button type="submit" name="list" value={list_name}>
              +
            </button>
          </form>
        </div>
      </div>
    );
  }
}
