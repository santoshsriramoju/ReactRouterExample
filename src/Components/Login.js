import React from "react";
import "./Login.css";
import { NavLink, Redirect } from "react-router-dom";
import { Context } from "../App";

const nameRef = React.createRef();
const pwdRef = React.createRef();

export default class Login extends React.Component {
  handleLogin = props => {
    if (props.state.loginDetails.length > 0) {
      console.log("username",props.state.loginDetails.Username)
      console.log("pwd",props.state.loginDetails.Password)
      
        props.state.loginDetails.map((val)=>{
          if ( val.Username === nameRef.current.value &&
            val.Password === pwdRef.current.value){
              props.updateValidity();
            }
            else{
              alert("Invalid credentials")
            }
        }
       
      ) 
      
    } else {
      alert("Please register");
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <Context.Consumer>
        {props => (
          <div className="login">
            <h1>User Authentication</h1>
            <form>
              <label>
                <input type="text" placeholder="Enter Username" ref={nameRef} />
              </label>
              <label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  ref={pwdRef}
                />
                <br />
              </label>
              <label>
                <NavLink exact strict to="/welcome">
                  <input
                    id="submit"
                    onClick={() => this.handleLogin(props)}
                    type="submit"
                    value="Login"
                  />
                </NavLink>{" "}
                {"  "}
                <NavLink exact strict to="/register">
                  <input id="register" type="button" value="Register" />
                </NavLink>
              </label>
            </form>
          </div>
        )}
      </Context.Consumer>
    );
  }
}
