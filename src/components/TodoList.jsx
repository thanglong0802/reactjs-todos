import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const {
      filterTodos,
      completeTodo,
      deleteTodo,
      editTodo,
      pageNumber,
      renderTotalPage,
    } = this.props;
    return (
      <section className="section-todo">
        <ul className="ul-todo">
          {filterTodos.map((todo, index) => {
            const { id, isComplete, name } = todo;
            if (
              index < pageNumber * renderTotalPage &&
              index >= (pageNumber - 1) * renderTotalPage
            ) {
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
          })}
        </ul>
      </section>
    );
  }
}

export default TodoList;
