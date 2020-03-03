// Change below class to use useState and useEffect
//Answer
// const myComponent = () => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem('someRandomValue') || '',
//   );
//   React.useEffect(() => {
//     localStorage.setItem('someRandomValue', value);
//   }, [value]);
//   const onChange = event => setValue(event.target.value);
//   return (
//     <div>
//       <h1>Some random functional component with state and side Effects!</h1>
//       <input value={value} type="text" onChange={onChange} />
//       <p>{value}</p>
//     </div>
//   );
// };

import React from "react";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: localStorage.getItem("someRandomValue") || ""
    };
  }
  componentDidUpdate() {
    localStorage.setItem("someRandomValue", this.state.value);
  }
  onChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Just some random class component!</h1>
        <input value={this.state.value} type="text" onChange={this.onChange} />
        <p>{this.state.value}</p>
      </div>
    );
  }
}

export default Task;
