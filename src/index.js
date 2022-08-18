import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Chiro from "./chiro";
import "./index.css";

import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("chiro"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Chiro />
    </Provider>
  </React.StrictMode>
);
