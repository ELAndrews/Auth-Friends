import React from "react";
import FriendsList from "./FriendsList";
import EditFriends from "./EditFriend";
import { Route, NavLink } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div>
      <nav className="dashHeader">
        My Dashboard
        <NavLink to="/myDashboard/friends">My Friends</NavLink>
        <NavLink to="/myDashboard/edit">Edit Friends</NavLink>
      </nav>
      <Route path="/myDashboard/friends" component={FriendsList} />
      <Route path="/myDashboard/edit" component={EditFriends} />
    </div>
  );
}
