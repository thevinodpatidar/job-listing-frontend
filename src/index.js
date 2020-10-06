import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import store from './store';

ReactDOM.render(
    <Router >
        <App />
    </Router>,
  document.getElementById('root')
);
