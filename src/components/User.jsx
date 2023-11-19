import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const User = () => {
  const loadedUser = useLoaderData();
  const [users, setUsers] = useState(loadedUser);

  const handleDelete = (_id) => {
    console.log("Delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("data deleted successfully");
          const remaining = users.filter((user) => user._id !== _id);
          console.log(remaining);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      Total Data: {users.length}
      {users.map((user) => (
        <p key={user._id}>
          <strong>Name: {user.name}</strong> <br></br> Email: {user.email}{" "}
          <button
            onClick={() => handleDelete(user._id)}
            style={{ background: "red", color: "white" }}
          >
            X
          </button>
          <Link to={`/user/${user._id}`}> Update</Link>
        </p>
      ))}
    </div>
  );
};

export default User;
