import React from 'react';
import ReactDOM from 'react-dom';
import { API } from './api';

const app = document.getElementById('app');
function App() {
  console.log(API);
  return <h1>Hello World</h1>;
}

ReactDOM.render(<App />, app);
