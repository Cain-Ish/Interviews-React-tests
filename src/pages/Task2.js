// Create simple counter (increment by 1)
// countClickWithCallback() - should use callbacks
// countClickFunctionalParameter() - should use Parameter

// ANSWERS commented in functions

import React from "react";

class Task extends React.Component {
  state = {
    counter: 0,
    message: `So far The button was not pressed`
  };

  countClickWithCallback = () => {
    // this.setState({ counter: this.state.counter + 1 }, () =>
    //   this.setState({
    //     message: `The button was pressed ${this.state.counter} times.`
    //   })
    // );
  };

  countClickFunctionalParameter = () => {
    // this.setState((prevState, props) => ({ counter: prevState.counter + 1 }));
    // this.setState((prevState, props) => ({
    //   message: `The button was pressed ${prevState.counter} times.`
    // }));
  };

  render() {
    return (
      <div>
        <p>Click count = {this.state.counter}</p>
        <p>{this.state.message}</p>
        <button onClick={this.countClickWithCallback}>
          Press this button - with callback
        </button>
        <button onClick={this.countClickFunctionalParameter}>
          Press this button - with the functional parameter
        </button>
      </div>
    );
  }
}

export default Task;
