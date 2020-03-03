// Fix issue at line 23 "Cannot read property 'name' of null
// ANSWER: incorrect type for this.state.user. Should be: this.state = {user: {name: ''}}

import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentDidMount() {
    fetch("https://my-json-server.typicode.com/Cain-Ish/demo/profile")
      .then(response => response.json())
      .then(json => this.setState({ user: json }));
  }

  render() {
    return (
      <div>
        <p>User name:</p>
        {/* <p>{this.state.user.name}</p> */}
      </div>
    );
  }
}

export default Task;
