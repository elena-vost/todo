import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>
          <li>Todo1</li>
          <li>Todo2</li>
        </ul>
      </div>
    );
  }
}
export default Todo;
