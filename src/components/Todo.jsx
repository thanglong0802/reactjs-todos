import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { index, id, isComplete, name, completeTodo, deleteTodo } =
      this.props;
    // console.log(index);
    return (
      <div className="show-list">
        <input
          type="text"
          className=""
          value={name}
          onChange={(event) => event.defaultPrevented()}
          style={{
            color: isComplete ? "#969494" : "black",
            textDecoration: isComplete ? "line-through" : "none",
          }}
        />
        <button
          type="button"
          className="btn btn-success"
          onClick={() => completeTodo(index, isComplete)}
        >
          Completed
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Todo;
