import { API } from '../api';

export const ADD_TODO = 'ADD_TODO';
export const RECEIVE_DATA = 'RECEIVE_DATA';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function receiveDataAction(todos) {
  return {
    type: RECEIVE_DATA,
    todos,
  };
}

// Redux thunk middleware. If what's being passed to dispatch is a function, invoke that function, passing it dispatch.
// Otherwise dispatch object to reducer as usual.
export function handleInitialData() {
  return (dispatch) => {
    return API.fetchTodos().then((todos) => {
      console.log(todos);
      dispatch(receiveDataAction(todos));
    });
  };
}

export function handleAddTodo(name, cb) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch(() => alert('There was an error. Try again.'));
  };
}
