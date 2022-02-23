import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyles from './reset.css.js';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);