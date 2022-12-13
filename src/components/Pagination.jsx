import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { todos, perPage } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos / 5); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
      return <button onClick={() => perPage(number)}>{number}</button>;
    });
    return <div className="pagination-number">{renderPageNumbers}</div>;
  }
}

export default Pagination;
