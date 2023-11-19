import React from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const userData = useLoaderData();

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const updatedUser = { name, email };
    fetch(`http://localhost:5000/users/${userData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };

  return (
    <div>
      <h2>
        Update information of{" "}
        <span style={{ color: "crimson" }}>{userData?.name}</span>
      </h2>

      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={userData?.name} />
        <br />
        <input type="email" name="email" id="" defaultValue={userData?.email} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateUser;
