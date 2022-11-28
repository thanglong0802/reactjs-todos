import React, { Component } from "react";

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
    if (
      this.state.input === undefined ||
      this.state.input === null ||
      this.state.input.trim() === ""
    ) {
      this.setState({
        input: "",
      });
      return;
    }
    addTodo(this.state.input.trim());
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="task-input"
          onChange={this.onChangeInput}
          value={this.state.input}
          style={{
            width: "300px",
            backgroundColor: "",
            borderColor: "transparent",
            borderBottomColor: "black",
          }}
        />
        <button className="btn-add" type="submit" onClick={this.onClick}>
          Add
        </button>
      </div>
    );
  }
}

export default FormInput;
