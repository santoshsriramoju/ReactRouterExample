import React from "react";
import { Redirect, NavLink } from "react-router-dom";

export default class Welcome extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="welcome">
          <NavLink exact strict to="/">
            <button>Back</button>
          </NavLink>
        </div>
        <h1> Welcome</h1>
      </React.Fragment>
    );
  }
}
