// Create simple ToDo list.
// 1. Fetch data from https://my-json-server.typicode.com/Cain-Ish/demo/todos
// Data structure: [
//   {
//     "userId": number,
//     "id": number,
//     "title": string,
//     "completed": boolean
//   }
// ]
// 2. Show data as list of todos
// 3. Under list, there should be input allowing adding a new one
// 3. User should have a possibility to mark is as complete/uncomplete - checkbox
// 4. User should have the possibility to remove any of todo's (exist one and a new one)
// 5. User should have possibility to add new todo (POST)

import React, { Component } from "react";

class Task extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  async componentDidMount() {
    const res = await fetch(
      "https://my-json-server.typicode.com/Cain-Ish/demo/todos"
    );
    const json = await res.json();
    this.setState({ todos: json });
  }

  render() {
    return (
      <div>
        <h2 className="heading">TODO List</h2>
        <ul>
          {/* {this.state.todos.map((todo, i) => (
            <li key={i}>{todo.title}</li>
          ))} */}
        </ul>
      </div>
    );
  }
}

export default Task;
