import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

import styles from './scss/application.scss';

const root = createRoot(document.getElementById('contents'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
