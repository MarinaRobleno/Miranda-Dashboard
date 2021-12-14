import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { mainTheme } from "./styles/Themes";
import { ThemeProvider } from "styled-components";
import store from "./features/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={mainTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
