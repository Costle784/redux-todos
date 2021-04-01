import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import loading from './loading';
import todos from './todos';

export default combineReducers({
    todos,
    loading,
    loadingBar: loadingBarReducer,
});
