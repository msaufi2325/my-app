import React from "react";
import ReactDOM from "react-dom/client";
import AppClass from "./AppClass";
import HelloWorld from "./Hello";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppClass />
    <HelloWorld />
  </React.StrictMode>
);
