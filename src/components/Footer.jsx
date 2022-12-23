import React, { Component } from "react";

import "../App.css";

class Footer extends Component {
  render() {
    const { filterTodos, totalTodos } = this.props;
    return (
      <div className="foo-footer">
        <span className="todo-count">
          <strong>{totalTodos}</strong>
          <span> </span>
          <span>items left</span>
        </span>

        <ul className="filters">
          <li onClick={() => filterTodos("ALL")}>
            <a href="#/">All</a>
          </li>
          <span> </span>
          <li onClick={() => filterTodos("INCOMPLETE")}>
            <a href="#/active">Active</a>
          </li>
          <span> </span>
          <li onClick={() => filterTodos("COMPLETE")}>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
