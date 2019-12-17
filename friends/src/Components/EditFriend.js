import React from "react";
import axios from "axios";

export default function EditFriends(props) {
  return (
    <div className="friends">
      {props.friends.map((curr, index) => {
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
