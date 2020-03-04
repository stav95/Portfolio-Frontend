import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ToDoList from "./todo-list/components/ToDoList.jsx";
import Recipe from "./recipe/components/Recipe.jsx";
import Home from "./home/components/Home";

import "./App.css";

function App() {
  return (
    <div id="root" className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/recipes">
            <Recipe></Recipe>
          </Route>
          <Route exact path="/todo">
            <ToDoList></ToDoList>
          </Route>
          <Route component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
