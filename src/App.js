import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Welcome from "./Components/Welcome";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";

export const Context = React.createContext();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loginDetails: [],
      isValid: false
    };
  }

  updateState = val => {
    this.setState({
      loginDetails: this.state.loginDetails.concat(val)
    });
  };

  updateValidity = () => {
    this.setState({
      isValid: !this.state.isValid
    });
    return <Redirect to="/welcome"/>;
  };

  render() {
    return (
      <div className="App">
        <Context.Provider
          value={{
            state: this.state,
            updateState: val => {
              this.updateState(val);
            },
            updateValidity: () => {
              console.log("update validity")
              this.updateValidity();
            }
          }}
        >
          <Router>
            <Switch>
              <Route path="/" exact strict component={Login} />
              <Route path="/register" exact strict component={Register} />
              <Route
                exact
                strict
                path="/welcome"
                component={() => (this.state.isValid ? <Welcome /> : <Redirect to="/"/> )}
              />
            </Switch>
          </Router>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
