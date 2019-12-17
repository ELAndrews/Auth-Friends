import React from "react";
import "./App.scss";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import UserDashboard from "./Components/UserDashboard";

function App(props) {
  const logout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div className="App">
      <nav>
        <div className="linkContainer">
          <NavLink className="link" exact to="/">
            Login
          </NavLink>
          <NavLink className="link" to="/myDashboard">
            My Dashboard
          </NavLink>
        </div>
        <button onClick={logout}>Log Out</button>
      </nav>
      <div className="content">
        <Route exact path="/" component={Login} />
        <Route
          path="/myDashboard"
          render={props => withAuthChecked(UserDashboard, props)}
        />
      </div>
    </div>
  );
}

function withAuthChecked(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  } else {
    alert(`You need to login to access "My Dashboard"`);
    return <Redirect to="/" />;
  }
}

export default withRouter(App);
