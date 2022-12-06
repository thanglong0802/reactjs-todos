import React, { Component } from "react";
import Todo from "./Todo";

import "../App.css";

class TodoList extends Component {
  render() {
    const { filterTodos, completeTodo, deleteTodo } = this.props;
    return (
      <section className="todo-list">
        <div className="todo">
          {filterTodos.map((todo, index) => {
            const { id, isComplete, name } = todo;
            return (
              <Todo
                key={id}
                index={index}
                id={id}
                isComplete={isComplete}
                name={name}
                completeTodo={completeTodo}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default TodoList;
