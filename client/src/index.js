import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// Middleware - allows us to hook into redux lifecycle after an action is dispatched but before action reaches reducer
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const app = document.getElementById('app');

// Provider gives application access to Redux store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    app
);
