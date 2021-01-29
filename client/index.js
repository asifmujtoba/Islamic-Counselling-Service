import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/style.scss';

import App from './App';

// redux
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
