// Fill test criteria with correct test cases.
// Tests are at Task4Form.test.js file

import React, { Component } from "react";
import Form from "./components/Task4Form";

class Add extends Component {
  render() {
    return (
      <div>
        <h1>Add Function</h1>
        <Form operator="+" />
      </div>
    );
  }
}

export default Add;
