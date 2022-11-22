import React, { Component } from "react";
// import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      changeInput: "",
    };
  }

  onChange = (e) => {
    const changeValue = e.target.value;
    // console.log(changeValue);
    this.setState({ changeInput: changeValue });
    // console.log(changeValue);
  };

  onClick = () => {
    const { onChange } = this.props;
    onChange(this.state.changeInput);
  };

  render() {
    // console.log(this.state.changeInput);
    return (
      <div className="TodoList">
        <input
          type="text"
          value={this.state.changeInput}
          onChange={this.onChange}
        />
        <button onClick={this.onClick}></button>
      </div>
    );
  }
}

export default TodoList;
