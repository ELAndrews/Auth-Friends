import React from "react";

export default function FriendsList(props) {
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
