//flow: Login (username, password) => localstorage token => Dashboard, friendslist => button to edit (add, delete, edit friends)

import React, { useRef } from "react";
import axios from "axios";

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/myDashboard");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={handleSubmit}>
        Username: <input ref={usernameRef} type="text" />
        Password: <input ref={passwordRef} type="password" />
        <input type="submit" />
      </form>
    </div>
  );
}
