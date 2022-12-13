import React, { Component } from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filterTodos: [],
      totalTodos: 0,
      pageNumber: 1,
    };
  }

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
    });
  };

  perPage = (number) => {
    this.setState({ pageNumber: number });
  };

  editTodo = () => {
    console.log("edit");
  };

  render() {
    return (
      <div className="App">
        <Header />
        <FormInput
          addTodo={this.addTodo}
          filterTodos={this.state.filterTodos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          pageNumber={this.state.pageNumber}
        />
        <Footer
          filterTodos={this.filterTodos}
          totalTodos={this.state.totalTodos}
        />
        <Pagination todos={this.state.todos.length} perPage={this.perPage} />
      </div>
    );
  }
}

export default App;
