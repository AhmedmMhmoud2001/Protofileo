import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';
import { ThemeProvider } from './Context'
ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

