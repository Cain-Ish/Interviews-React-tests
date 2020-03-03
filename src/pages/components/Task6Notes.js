import React, { Component } from "react";
import NotesForm from "./Task6NotesForm";
import AllNotes from "./Task6AllNotes";

export default class Notes extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>React Redux Notes App</h1>

        <NotesForm />
        <hr />
        <AllNotes />
      </React.Fragment>
    );
  }
}
