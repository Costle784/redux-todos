import { ADD_TODO, RECEIVE_DATA } from '../actions/todos';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([action.todo]);
    case RECEIVE_DATA:
      return action.todos;
    default:
      return state;
  }
}
