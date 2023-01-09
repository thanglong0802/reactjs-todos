import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  onScrollSection = () => {
    const { nextPage, limit, page, filterTodos } = this.props;
    const sectionBottom = this.sectionRef.getBoundingClientRect().bottom;
    const ulBottom = this.ulRef.getBoundingClientRect().bottom;
    if (ulBottom - sectionBottom < 10 && limit * page < filterTodos.length) {
      nextPage();
    }
  };
  setSectionRef = (sectionRef) => {
    this.sectionRef = sectionRef;
    this.sectionRef.addEventListener("scroll", this.onScrollSection);
  };
  setUlRef = (ulRef) => {
    this.ulRef = ulRef;
  };
  render() {
    const {
      filterTodos,
      completeTodo,
      deleteTodo,
      editTodo,
      // pageNumber,
      // renderTotalPage,
      limit,
      page,
    } = this.props;
    return (
      <section className="section-todo" ref={this.setSectionRef}>
        <ul className="ul-todo" ref={this.setUlRef}>
          {filterTodos.map((todo, index) => {
            const { id, isComplete, name } = todo;
            // if (
            //   index < pageNumber * renderTotalPage &&
            //   index >= (pageNumber - 1) * renderTotalPage
            // )
            if (index < page * limit) {
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
