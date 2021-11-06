import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { FavouriteContextProvider } from "./store/FavouriteContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <FavouriteContextProvider>
    <Router>
      <App />
    </Router>
  </FavouriteContextProvider>,
  document.getElementById("root")
);
