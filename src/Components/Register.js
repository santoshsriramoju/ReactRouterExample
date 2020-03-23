import React from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../App";
import "./Register.css";

export default class Register extends React.Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
    this.ageRef = React.createRef();
    this.pwdRef = React.createRef();
    this.mobileRef = React.createRef();
  }

  handleRegister = val => {
    let dataObj = {
      Username: this.nameRef.current.value,
      Age: this.ageRef.current.value,
      Password: this.pwdRef.current.value,
      Mobile: this.mobileRef.current.value
    };
    val(dataObj);
    console.log("object",dataObj)
    dataObj = null;
  };

  render() {
    return (
      <Context.Consumer>
        {props => (
          <div className="login">
            <h1>User Registration</h1>
            <form>
              <label>
                <input type="text" placeholder="Enter Username" ref={this.nameRef} />
              </label>
              <label>
                <input type="number" placeholder="Enter Age" ref={this.ageRef} />
              </label>
              <label>
                <input
                  type="number"
                  placeholder="Enter Mobile Number"
                  ref={this.mobileRef}
                />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  ref={this.pwdRef}
                />
              </label>
              <label>
                <NavLink exact strict to="/">
                  <input
                    onClick={() => this.handleRegister(props.updateState)}
                    id="submit"
                    type="submit"
                    value="Register"
                  />
                </NavLink>{" "}
              </label>
            </form>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
