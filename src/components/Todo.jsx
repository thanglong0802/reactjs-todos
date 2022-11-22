import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <ul>
        {this.props.value.map((todo, index) => (
          <li>{index + " | " + todo}</li>
        ))}
      </ul>
    );
  }
}

export default Todo;
