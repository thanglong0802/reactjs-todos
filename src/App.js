import React from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

import "./css/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueList: [],
    };
  }

  onChangeValue = (valueInput1) => {
    // console.log("Text", valueInput1);
    // this.setState({
    //   valueInput:
    // })
    // const newListItem = [valueInput1];
    // newListItem.push(...newListItem);

    this.setState({
      valueList: [...this.state.valueList, valueInput1],
    });
  };

  render() {
    console.log(this.state.valueList);
    return (
      <>
        <div className="App">
          <TodoList
            // value={this.state.valueInput}
            onChange={this.onChangeValue}
          />
        </div>
        <div>
          <Todo value={this.state.valueList} />
        </div>
      </>
    );
  }
}

export default App;
