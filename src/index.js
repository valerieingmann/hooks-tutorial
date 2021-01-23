import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

export const TreesContext = createContext();
export const useTrees = () => useContext(TreesContext);

const trees = [
  { id: 1, type: "Maple" },
  { id: 2, type: "Oak" },
  { id: 3, type: "Redwood" }
];

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
