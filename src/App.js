import React from "react";
import "./App.css";
import ToDoList from "./todo-list/ToDoList";
import Recipe from "./recipe/Recipe";
import Search from "./recipe/Search";

import axios from "axios";

function test() {
  alert("STARTING");
  axios.get("/recipe-finder").then(res => {
    alert("Finish");
    console.log(res);
  });
}

function App() {
  return (
    <div id="root" className="App">
      <button onClick={() => test()}> </button>
      <Recipe></Recipe>
      {/* <ToDoList></ToDoList> */}
      {/* <Search></Search> */}
    </div>
  );
}

export default App;
