import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task6 from "./pages/Task6";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Task 1</Link>
          </li>
          <li>
            <Link to="/task2">Task 2</Link>
          </li>
          <li>
            <Link to="/task3">Task 3</Link>
          </li>
          <li>
            <Link to="/task4">Task 4</Link>
          </li>
          <li>
            <Link to="/task5">Task 5</Link>
          </li>
          <li>
            <Link to="/task6">Task 6</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Task1 />
          </Route>
          <Route path="/task2">
            <Task2 />
          </Route>
          <Route path="/task3">
            <Task3 />
          </Route>
          <Route path="/task4">
            <Task4 />
          </Route>
          <Route path="/task5">
            <Task5 />
          </Route>
          <Route path="/task6">
            <Task6 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
