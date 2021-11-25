import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { mainTheme } from './styles/Themes';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>,
  document.getElementById('root')
);

