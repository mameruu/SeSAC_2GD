import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store";
import { Provider } from "react-redux"; // 프로바이더도 임포트 시켜주기!

const root = ReactDOM.createRoot(document.getElementById("root"));
const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = configureStore({ reducer: rootReducer }, reduxDevTool);
console.log(store.getState());

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
