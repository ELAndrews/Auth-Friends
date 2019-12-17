import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FriendsList() {
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
    <div className="friends">
      <h4>My Friends</h4>
      {friends.map((curr, index) => {
        return (
          <div key={index} className="friendCard">
            <p>{curr.name}</p>
            <span>age: {curr.age}</span> <br />
            <span>email: {curr.email}</span>
          </div>
        );
      })}
    </div>
  );
}
