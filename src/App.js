import React from "react";
import "./App.css";
import ToDoList from "./todo-list/ToDoList";
import Recipe from "./recipe/Recipe";
import Search from "./recipe/Search";

function App() {
  return (
    <div id="root" className="App">
      <Recipe></Recipe>
      {/* <ToDoList></ToDoList> */}
      {/* <Search></Search> */}
    </div>
  );
}

export default App;
