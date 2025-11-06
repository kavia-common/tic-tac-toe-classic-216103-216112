import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

// Log a couple of env values to verify they are accessible without breaking build
// Safe optional access; values will be '' if unset due to vite.config define
// eslint-disable-next-line no-console
console.log('API Base:', import.meta.env.REACT_APP_API_BASE || '(not set)');

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
