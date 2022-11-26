import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    return (
      <section>
        <div style={{ textAlign: "center" }}>
          {todos.map((todo, index) => {
            return (
              <div>
                <input
                  type="text"
                  className=""
                  value={todo.name}
                  onChange={(event) => event.defaultPrevented()}
                  style={{
                    width: "300px",
                    borderRadius: "",
                    borderColor: "transparent",
                    borderBottomColor: "black",
                    color: todo.isComplete ? "#969494" : "black",
                    textDecoration: todo.isComplete ? "line-through" : "none",
                  }}
                />
                <button
                  onClick={() =>
                    this.props.completeTodo(todo.id, todo.isComplete)
                  }
                >
                  Completed
                </button>
                <button onClick={() => this.props.deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default TodoList;
