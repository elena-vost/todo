import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }
  render() {
    return (
      <div>
        <button>Edit</button>
        <button>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}
export default NewTodoForm;
