import React from "react";
import "./App.css";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import UserDashboard from "./Components/UserDashboard";

function App(props) {
  const logout = () => {};
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Login
        </NavLink>
        <NavLink to="/myDashboard">My Dashboard</NavLink>
        <button onClick={logout}>Log Out</button>
      </nav>
      <Route exact path="/" component={Login} />
      <Route
        exact
        path="/myDashboard"
        render={props => withAuthChecked(UserDashboard, props)}
      />
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
