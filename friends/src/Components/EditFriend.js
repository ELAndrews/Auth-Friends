import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

export default function EditFriends(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    email: ""
  });
  const [error, setError] = useState(null);

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", formValues)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        setError(err);
      });
  };

  return (
    <div className="editFriendsContainer">
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
      <div className="form">
        <h3>Add a New Friend</h3>
        <form onSubmit={handleSubmit}>
          Name: <input type="text" name="name" onChange={handleChange} /> <br />
          Age: <input type="text" name="age" onChange={handleChange} />
          <br />
          Email: <input type="email" name="email" onChange={handleChange} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
