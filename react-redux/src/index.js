import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
function reducer(state = 1, action) {
  if (action.type === "증가") {
    if (action.number && action.number !== "") {
      state = state + Number(action.number);
    } else if (action.number === "") {
      state = state;
    } else {
      state++;
    }
    return state;
  } else if (action.type === "감소") {
    if (action.number && action.number !== "") {
      state = state - Number(action.number);
    } else if (action.number === "") {
      state = state;
    } else {
      state--;
    }
    return state;
  } else {
    return state;
  }
}
const store = configureStore({ reducer: reducer });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
