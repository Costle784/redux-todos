import { ADD_TODO, RECEIVE_DATA, REMOVE_TODO } from '../actions/todos';

export default function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo]);
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case RECEIVE_DATA:
            return action.todos;
        default:
            return state;
    }
}
