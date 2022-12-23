import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { filterTodos, perPage, renderPage, renderTotalPage } = this.props;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filterTodos / renderTotalPage); i++) {
      pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <button
          key={number}
          className="onClickChangeColor"
          onClick={() => perPage(number)}
        >
          {number}
        </button>
      );
    });
    return (
      <div className="pagination-number">
        <div className="number-of-line">
          <select
            className="render-page"
            onChange={(value) => renderPage(value, this)}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
          </select>
        </div>
        <div className="page">{renderPageNumbers}</div>
      </div>
    );
  }
}

export default Pagination;
