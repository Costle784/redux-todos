import React from 'react';
import List from './List';
import { connect } from 'react-redux';
import { handleAddTodo, handleRemoveTodo } from '../actions/todos';

class Todos extends React.Component {
    constructor(props) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(e) {
        e.preventDefault();
        this.props.dispatch(
            handleAddTodo(this.input.value, () => (this.input.value = ''))
        );
    }

    removeTodo(todo) {
        this.props.dispatch(handleRemoveTodo(todo));
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    placeholder="Add Todo"
                    ref={(input) => (this.input = input)}
                />
                <button onClick={this.addTodo}>Add Todo</button>
                {/* Alternate approach intead of binding in constructor. Down side is creates a new function every time component is rendered. */}
                {/* <button onClick={(e) => this.addTodo(e)}>Add Todo</button> */}
                <List
                    items={this.props.todos}
                    remove={this.removeTodo}
                    // remove={() => this.removeTodo(todo)}
                />
            </div>
        );
    }
}

export default connect((state) => ({
    todos: state.todos,
}))(Todos);
