import React, { useState, useEffect } from "react";
import axios from "axios";
import FriendsList from "./FriendsList";
import EditFriends from "./EditFriend";
import { Route, NavLink } from "react-router-dom";

export default function UserDashboard() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/friends", {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <div>
      <nav className="dashHeader">
        My Dashboard
        <NavLink to="/myDashboard/friends">My Friends</NavLink>
        <NavLink to="/myDashboard/edit">Edit Friends</NavLink>
      </nav>
      <h4>My Friends</h4>
      <Route
        path="/myDashboard/friends"
        render={props => <FriendsList friends={friends} />}
      />
      <Route
        path="/myDashboard/edit"
        render={props => (
          <EditFriends friends={friends} setFriends={setFriends} />
        )}
      />
    </div>
  );
}
