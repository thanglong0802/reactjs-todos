import React, { Component } from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

import "bootstrap/dist/css/bootstrap.css";
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filterTodos: [],
      totalTodos: 0,
      pageNumber: 1,
      renderTotalPage: 3,
      limit: 5,
      page: 1,
    };
  }

  nextPage = () => {
    this.setState((state) => ({
      page: state.page + 1,
    }));
  };

  addTodo = (input) => {
    const { todos } = this.state;
    let newTodo = {
      id:
        todos.reduce((initValue, element) => {
          return Math.max(initValue, element.id);
        }, -1) + 1,
      name: input,
      isComplete: false,
    };
    let newTodos = [...todos, newTodo];
    // let totalTodos = newTodos.reduce(
    //   (activeItems, currentValue) =>
    //     activeItems + (!currentValue.isComplete ? 1 : 0),
    //   0
    // );
    let count = 0;
    const arrLength = newTodos.length;
    for (let i = 0; i < arrLength; i++) {
      if (!newTodos[i].isComplete) {
        count++;
      }
    }
    this.setState({
      todos: newTodos,
      filterTodos: newTodos,
      totalTodos: count,
    });
  };

  deleteTodo = (todo_id) => {
    const { todos, filterTodos } = this.state;
    let newTodos = todos.filter((element) => {
      return element.id !== todo_id;
    });

    let newTodoss = filterTodos.filter((element) => {
      return element.id !== todo_id;
    });
    let count = 0;
    const arrLength = newTodos.length;
    for (let i = 0; i < arrLength; i++) {
      if (!newTodos[i].isComplete) {
        count++;
      }
    }
    this.setState({
      todos: newTodos,
      filterTodos: newTodoss,
      totalTodos: count,
    });
  };

  completeTodo = (todo_id, isCheck) => {
    const { todos } = this.state;
    // console.log(this.state.todos[todo_index]);
    // complete theo index
    // let newTodos = todos;
    // newTodos[todo_index].isComplete = !isCheck;

    // complete theo id
    let newTodos = todos.map((element) => {
      if (element.id === todo_id) {
        element.isComplete = !isCheck;
      }
      return element;
    });

    let count = 0;
    const arrLength = newTodos.length;
    for (let i = 0; i < arrLength; i++) {
      if (!newTodos[i].isComplete) {
        count++;
      }
    }
    this.setState({
      todos: newTodos,
      filterTodos: newTodos,
      totalTodos: count,
    });
    // let isComplete = newTodos.reduce((activeItems, element) => {
    //   return activeItems + (!element.isComplete ? 1 : 0);
    // }, 0);
  };

  filterTodos = (filterCondition) => {
    let filterTodos = this.state.todos.filter(
      (element) =>
        (filterCondition === "INCOMPLETE" && !element.isComplete) ||
        (filterCondition === "COMPLETE" && element.isComplete) ||
        filterCondition === "ALL"
    );
    this.setState({
      filterTodos,
      pageNumber: 1,
    });
  };

  perPage = (number) => {
    this.setState({ pageNumber: number });
  };

  searchTodos = (todo) => {
    this.setState({
      filterTodos: todo,
      pageNumber: 1,
    });
  };

  updateTodo = (id, input) => {
    const { filterTodos } = this.state;
    const updateTodos = [...filterTodos];
    updateTodos[id] = {
      id,
      name: input,
    };
    this.setState({
      todos: updateTodos,
      filterTodos: updateTodos,
    });
  };

  renderPage = (obj) => {
    let value = obj.target.value;
    this.setState({
      renderTotalPage: parseInt(value),
      pageNumber: 1,
    });
  };

  render() {
    const {
      filterTodos,
      pageNumber,
      todos,
      renderTotalPage,
      totalTodos,
      limit,
      page,
    } = this.state;
    console.log(page);
    return (
      <section className="todo-app">
        <div id="container">
          <header className="header">
            <Header />
          </header>
          <section className="main">
            <FormInput
              addTodo={this.addTodo}
              filterTodos={filterTodos}
              completeTodo={this.completeTodo}
              deleteTodo={this.deleteTodo}
              pageNumber={pageNumber}
              searchTodos={this.searchTodos}
              updateTodo={this.updateTodo}
              todos={todos}
              perPage={this.perPage}
              renderTotalPage={renderTotalPage}
              limit={limit}
              page={page}
              nextPage={this.nextPage}
            />
          </section>
          <footer className="footer">
            <Footer filterTodos={this.filterTodos} totalTodos={totalTodos} />
            <Pagination
              filterTodos={filterTodos.length}
              perPage={this.perPage}
              renderTotalPage={renderTotalPage}
              renderPage={this.renderPage}
            />
          </footer>
        </div>
      </section>
    );
  }
}

export default App;
