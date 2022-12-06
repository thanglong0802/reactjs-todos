import React, { Component } from "react";

import "../App.css";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  onChangeInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onClick = () => {
    const { addTodo } = this.props;
    const { input } = this.state;
    if (!input || input.trim() === "") {
      this.setState({
        input: "",
      });
      return;
    }
    addTodo(input.trim());
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div className="input-todo">
        <input
          type="text"
          className="task-input"
          placeholder="Enter a Todo..."
          onChange={this.onChangeInput}
          value={this.state.input}
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClick}
        >
          Add
        </button>
      </div>
    );
  }
}

export default FormInput;
