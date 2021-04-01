import { API } from '../api';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const UPDATE_TODO = 'UPDATE_TODO';

function addTodo(todo) {
    return {
        type: ADD_TODO,
        todo,
    };
}

function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        id,
    };
}

function receiveDataAction(todos) {
    return {
        type: RECEIVE_DATA,
        todos,
    };
}

function updateTodoAction(todo) {
    return {
        type: UPDATE_TODO,
        todo,
    };
}

// Redux thunk middleware. If what's being passed to dispatch is a function, invoke that function, passing it dispatch.
// Otherwise dispatch object to reducer as usual.
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return API.fetchTodos().then((todos) => {
            dispatch(hideLoading());
            dispatch(receiveDataAction(todos));
        });
    };
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        dispatch(showLoading());
        console.log('here');
        return API.saveTodo(name)
            .then((todo) => {
                dispatch(hideLoading());
                dispatch(addTodo(todo));
                cb();
            })
            .catch(() => {
                dispatch(hideLoading());
                alert('There was an error. Try again.');
            });
    };
}

export function handleRemoveTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodo(todo.id));
        return API.deleteTodo(todo.id).catch(() => {
            alert('There was an error. Try again.');
            dispatch(addTodo(todo));
        });
    };
}

export function handleUpdateTodo(todo, updated) {
    return (dispatch) => {
        dispatch(updateTodoAction(updated));
        return API.updateTodo(updated).catch(() => {
            alert('There was an error. Try again.');
            dispatch(updateTodoAction(todo));
        });
    };
}
