import React, { Component } from "react";

import "../App.css";

class Footer extends Component {
  render() {
    const { filterTodos, totalTodos } = this.props;
    return (
      <footer>
        <div className="total-todos">
          Có <i>{totalTodos}</i> công việc chưa hoàn thành
        </div>
        <div className="button-todos">
          <button
            type="button"
            className="btn btn-info"
            onClick={() => filterTodos("ALL")}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => filterTodos("INCOMPLETE")}
          >
            Incomplete
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => filterTodos("COMPLETE")}
          >
            Complete
          </button>
        </div>
      </footer>
    );
  }
}

export default Footer;
