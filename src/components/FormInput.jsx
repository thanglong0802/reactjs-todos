import React, { Component } from "react";

import "../App.css";
import TodoList from "./TodoList";

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
    const { filterTodos, completeTodo, deleteTodo, editTodo, pageNumber } =
      this.props;
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
        <div className="input-search">
          <TodoList
            input={this.state.input}
            filterTodos={filterTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            pageNumber={pageNumber}
          />
        </div>
      </div>
    );
  }
}

export default FormInput;
