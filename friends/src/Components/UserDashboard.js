import React, { useState, useEffect } from "react";
import axiosWithAuth from "./axiosWithAuth";
import FriendsList from "./FriendsList";
import EditFriends from "./EditFriend";
import { Route, NavLink } from "react-router-dom";

export default function UserDashboard() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <div>
      <div className="dashHeader">
        <h1>My Dashboard</h1>
      </div>
      <div className="editBtn">
        <NavLink className="edit" to="/myDashboard/edit">
          Edit
        </NavLink>
        {`\u270F`}
      </div>
      <NavLink to="/myDashboard" className="title">
        My Friends
      </NavLink>

      <Route
        exact
        path="/myDashboard"
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
