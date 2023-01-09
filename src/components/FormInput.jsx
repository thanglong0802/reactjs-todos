import React, { Component } from "react";
import TodoList from "./TodoList";
import logo from "../images/search.png";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      todoEdit: "",
    };
  }

  onChangeInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onClickAdd = (event) => {
    const { addTodo } = this.props;
    const { input } = this.state;

    if (event.key === "Enter") {
      if (!input || input.trim() === "") {
        this.setState({
          input: "",
        });
        return;
      } else {
        addTodo(input.trim());
        this.setState({
          input: "",
        });
      }
    }
  };

  onClickSearch = () => {
    const { filterTodos, searchTodos, todos } = this.props;
    const { input } = this.state;
    if (!input) {
      searchTodos(todos);
    } else {
      let searchByName = filterTodos.filter((element) => {
        return element.name.toLowerCase().includes(input);
      });
      searchTodos(searchByName);
    }
  };

  editTodo = (id) => {
    const { filterTodos } = this.props;
    // const updateTodos = [...filterTodos];
    const update = filterTodos[id].name;

    this.setState({
      todoEdit: id,
      input: update,
    });
  };

  render() {
    const {
      filterTodos,
      completeTodo,
      deleteTodo,
      pageNumber,
      updateTodo,
      renderTotalPage,
      limit,
      page,
      nextPage,
    } = this.props;
    const { input, todoEdit } = this.state;
    return (
      <>
        <div className="search">
          <img
            src={logo}
            alt="search"
            className="img-thumbnail"
            onClick={this.onClickSearch}
          />
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            onChange={this.onChangeInput}
            value={input}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                if (todoEdit || todoEdit === 0) {
                  updateTodo(todoEdit, input);
                  this.setState({ input: "", todoEdit: "" });
                } else {
                  this.onClickAdd(event);
                }
              }
            }}
          />
        </div>
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (todoEdit || todoEdit === 0) {
              updateTodo(todoEdit, this.state.input);
              this.setState({ input: "", todoEdit: "" });
            } else {
              this.onClickAdd();
            }
          }}
        >
          {todoEdit || todoEdit === 0 ? "Edit" : "Add"}
        </button> */}
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={this.onClickSearch}
        >
          Search
        </button> */}
        <div className="content">
          <TodoList
            input={input}
            filterTodos={filterTodos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={this.editTodo}
            pageNumber={pageNumber}
            onClickSearch={this.onClickSearch}
            renderTotalPage={renderTotalPage}
            limit={limit}
            page={page}
            nextPage={nextPage}
          />
        </div>
      </>
    );
  }
}

export default FormInput;
