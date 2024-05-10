import React, { Fragment, Component } from "react";
import "./AppClass.css";
import Input from "./Input";

export default class AppClass extends Component {
  constructor(props) {
    super(props);

    this.lastNameRef = React.createRef(null);
    this.firstNameRef = React.createRef();
    this.dobRef = React.createRef(null);

    this.state = {
      isTrue: false,
      crowd: [],
    };
  }

  setFirstName = (newName) => {
    this.setState({ firstName: newName });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.dob === ""
    ) {
      alert("Please fill in all fields");
      return;
    } else {
      this.addPerson(this.state.firstName, this.state.lastName, this.state.dob);
      this.setState({ firstName: "", lastName: "", dob: "" });

      this.firstNameRef.current.value = "";
      this.lastNameRef.current.value = "";
      this.dobRef.current.value = "";
    }
  };

  addPerson = (newFirstName, newLastName, newDob) => {
    let newPerson = {
      id: this.state.crowd.length + 1,
      firstName: newFirstName,
      lastName: newLastName,
      dob: newDob,
    };

    const newList = [...this.state.crowd, newPerson];

    const sorted = newList.sort((a, b) => {
      if (a.lastName < b.lastName) {
        return -1;
      } else if (a.lastName > b.lastName) {
        return 1;
      } else {
        return 0;
      }
    });

    this.setState({ crowd: sorted });
  };

  componentDidMount() {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      crowd: [
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
      ],
    });
  }

  toggleTrue = () => {
    this.setState({ isTrue: !this.state.isTrue });
  };

  render() {
    return (
      <>
        <hr />
        <h1 className="h1-green">{this.props.msg}</h1>
        <hr />
        {this.state.isTrue && (
          <Fragment>
            <p>The current value of isTrue is true</p>
            <hr />
          </Fragment>
        )}
        {this.state.isTrue ? <p>Is true</p> : <p>Is false</p>}
        <a
          href="#!"
          className="btn btn-outline-secondary"
          onClick={this.toggleTrue}
        >
          Toggle isTrue
        </a>

        <hr />
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="first-name">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              ref={this.firstNameRef}
              autoComplete="first-name-new"
              className="form-control"
              onChange={(e) => this.setFirstName(e.target.value)}
            ></input>
          </div>

          <Input
            title="Last Name"
            type="text"
            ref={this.lastNameRef}
            name="last-name"
            autoComplete="last-name-new"
            className="form-control"
            onChange={(e) => this.setState({ lastName: e.target.value })}
          ></Input>

          <Input
            title="Date of Birth"
            type="date"
            ref={this.dobRef}
            name="dob"
            autoComplete="dob-new"
            className="form-control"
            onChange={(e) => this.setState({ dob: e.target.value })}
          ></Input>

          <input
            type="submit"
            value="Submit"
            className="btn btn-primary"
          ></input>
        </form>
        <div>
          First Name: {this.state.firstName} <br />
          Last Name: {this.state.lastName} <br />
          Date of Birth: {this.state.dob} <br />
        </div>

        <hr />
        <h3>People</h3>
        <ul className="list-group">
          {this.state.crowd.map((person) => (
            <li key={person.id} className="list-group-item">
              {person.firstName} {person.lastName} born on {person.dob}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
