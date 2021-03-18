import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import { handleAddTodo } from '../actions/todos';

class Todos extends React.Component {
  addItem(e) {
    e.preventDefault();
    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ''))
    );
  }

  render() {
    const add = this.addItem.bind(this);
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={(input) => (this.input = input)}
        />
        <button onClick={add}>Add Todo</button>
        <List items={this.props.todos} />
      </div>
    );
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
