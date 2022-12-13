import React, { Component } from "react";
import Todo from "./Todo";

import "../App.css";

class TodoList extends Component {
  render() {
    const {
      filterTodos,
      completeTodo,
      deleteTodo,
      editTodo,
      input,
      pageNumber,
    } = this.props;
    // const currentPage = 1;
    // const perPagee = 5;
    return (
      <section className="todo-list">
        <div className="todo">
          {
            filterTodos
              .filter((user) => {
                return user.name.toLowerCase().includes(input);
              })
              .map((todo, index) => {
                const { id, isComplete, name } = todo;
                if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {
                  return (
                    <Todo
                      key={id}
                      id={id}
                      isComplete={isComplete}
                      name={name}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodo={editTodo}
                      index={index}
                    />
                  );
                }
                return null;
              })
            // .slice(
            //   (currentPage - 1) * perPagee,
            //   (currentPage - 1) * perPagee + perPagee
            // )
          }
        </div>
      </section>
    );
  }
}

export default TodoList;
