import React from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Context } from "../App";
import "./Welcome.css";

export default class Welcome extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {
        (props)=>(
        <React.Fragment>
          <div className="welcome">
            <NavLink exact strict to="/">
              <button>Back</button>
            </NavLink>
          </div>
        <h1> Welcome <span>{props.state.activeUser}</span></h1>
        </React.Fragment>
        )
  }
      </Context.Consumer>
    );
  }
}
