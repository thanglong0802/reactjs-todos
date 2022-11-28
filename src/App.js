import React, { Component } from "react";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      // completed: 0,
    };
  }

  addTodo = (input) => {
    let newTodo = {
      id:
        this.state.todos.reduce((initValue, element) => {
          return Math.max(initValue, element.id);
        }, -1) + 1,
      name: input,
      isComplete: false,
    };
    let newTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodos,
    });
  };

  deleteTodo = (todo_id) => {
    let newTodos = this.state.todos.filter((element) => {
      return element.id !== todo_id;
    });
    this.setState({
      todos: newTodos,
    });
  };

  completeTodo = (todo_id, isCheck) => {
    let todos = this.state.todos.map((element) => {
      if (element.id === todo_id) {
        element.isComplete = !isCheck;
      }
      return element;
    });
    // let isComplete = newTodos.reduce((activeItems, element) => {
    //   return activeItems + (!element.isComplete ? 1 : 0);
    // }, 0);
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <div className="form-input">
          <FormInput addTodo={this.addTodo} />
        </div>
        <div>
          <TodoList
            todos={this.state.todos}
            completeTodo={this.completeTodo}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
