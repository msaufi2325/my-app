import React, { Fragment, useState } from "react";
import "./App.css";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true);

  const toggleTrue = () => {
    setIsTrue(!isTrue);
  };

  return (
    <Fragment>
      <hr />
      <h1 className="h1-green">{props.msg}</h1>
      <hr />
      {isTrue && (
        <Fragment>
          <p>The current value of isTrue is true</p>
          <hr />
        </Fragment>
      )}
      <hr />
      {isTrue ? <p>Is true</p> : <p>Is false</p>}
      <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>
        Toggle isTrue
      </a>
      <hr />
    </Fragment>
  );
}

export default HelloWorld;
