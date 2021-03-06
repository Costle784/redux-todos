import {
    ADD_TODO,
    RECEIVE_DATA,
    REMOVE_TODO,
    UPDATE_TODO,
} from '../actions/todos';

export default function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo]);
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id);
        case UPDATE_TODO:
            return state.map((todo) =>
                todo.id !== action.todo.id ? todo : { ...todo, ...action.todo }
            );
        case RECEIVE_DATA:
            return action.todos;
        default:
            return state;
    }
}
