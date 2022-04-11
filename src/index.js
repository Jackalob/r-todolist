import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlobalStyles from './reset.css.js';
import App from './App';
import 'tippy.js/dist/tippy.css'; 

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);