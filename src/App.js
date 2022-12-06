import React, { Component } from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filterTodos: [],
      totalTodos: 0,
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
    let totalTodos = newTodos.reduce(
      (activeItems, currentValue) =>
        activeItems + (!currentValue.isComplete ? 1 : 0),
      0
    );
    this.setState({
      todos: newTodos,
      filterTodos: newTodos,
      totalTodos,
    });
  };

  deleteTodo = (todo_id) => {
    const { todos } = this.state;
    let newTodos = todos.filter((element) => {
      return element.id !== todo_id;
    });
    let leftItems = newTodos.reduce(
      (activeItems, currentValue) =>
        activeItems + (!currentValue.isComplete ? 1 : 0),
      0
    );
    this.setState({
      todos: newTodos,
      filterTodos: newTodos,
      totalTodos: leftItems,
    });
  };

  completeTodo = (todo_index, isCheck) => {
    const { todos } = this.state;
    // console.log(this.state.todos[todo_index]);
    let newTodos = todos;
    newTodos[todo_index].isComplete = !isCheck;
    let totalTodos = todos.reduce(
      (activeItems, currentValue) =>
        activeItems + (!currentValue.isComplete ? 1 : 0),
      0
    );
    this.setState({
      todos: newTodos,
      filterTodos: newTodos,
      totalTodos,
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

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <Header />
        <FormInput addTodo={this.addTodo} />
        <TodoList
          filterTodos={this.state.filterTodos}
          completeTodo={this.completeTodo}
          deleteTodo={this.deleteTodo}
        />
        <Footer
          filterTodos={this.filterTodos}
          totalTodos={this.state.totalTodos}
        />
      </div>
    );
  }
}

export default App;
