import React from "react";
import ReactDOM from "react-dom/client";
// import HelloWorld from "./HelloWorld";
import AppClass from "./AppClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <HelloWorld msg="Hello, again!" /> */}
          <AppClass msg="State using classes!" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
