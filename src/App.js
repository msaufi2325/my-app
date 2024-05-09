import React, { Fragment, useEffect, useState } from "react";
import "./App.css";

function HelloWorld(props) {
  const [isTrue, setIsTrue] = useState(true);
  const [crowd, setCrowd] = useState([]);

  const toggleTrue = () => {
    setIsTrue(!isTrue);
  };

  useEffect(() => {
    console.log("useEffect fired!");

    let people = [
      {
        id: 1,
        firstName: "Mary",
        lastName: "Jones",
        dob: "1997-05-02",
      },
      {
        id: 2,
        firstName: "Jack",
        lastName: "Smith",
        dob: "1999-02-04",
      },
    ];
    setCrowd(people);
  }, []);

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
      <h3>People</h3>
      <ul className="list-group">
        {crowd.map((person) => (
          <li key={person.id} className="list-group-item">
            {person.firstName} {person.lastName} born on {person.dob}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default HelloWorld;
