import React, { Component } from "react";

import checked from "../images/checked.png";
import deleted from "../images/delete.png";
import edit from "../images/edit.png";

class Todo extends Component {
  render() {
    const { id, isComplete, name, completeTodo, deleteTodo, editTodo } =
      this.props;
    return (
      <li className="li-todo">
        <div className="todo">
          <img
            src={checked}
            alt="checked"
            className="img-thumbnail img-checked"
            onClick={() => completeTodo(id, isComplete)}
          />
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
          <img
            src={deleted}
            alt="deleted"
            className="img-thumbnail"
            onClick={() => deleteTodo(id)}
          />
          <img
            src={edit}
            alt="edit"
            className="img-thumbnail"
            onClick={() => editTodo(id)}
          />
        </div>
      </li>
    );
  }
}

export default Todo;
