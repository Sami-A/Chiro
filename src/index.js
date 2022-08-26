import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "store";

import Chiro from "chiro";

const root = ReactDOM.createRoot(document.getElementById("chiro"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Chiro />
    </Provider>
  </React.StrictMode>
);
