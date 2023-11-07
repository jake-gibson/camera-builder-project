import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx'

import styles from './scss/application.scss'

const root = createRoot(document.getElementById('contents'));

root.render(
    <App />
);