import React from "react";
import "./App.css";
import ToDoList from "./todo-list/ToDoList.jsx";
import Recipe from "./recipe/Recipe.jsx";
import Home from "./home/components/Home";

function App() {
  return (
    <div id="root" className="App">
      {/* <Recipe></Recipe> */}
      {/* <ToDoList></ToDoList> */}
      <Home></Home>
    </div>
  );
}

export default App;
