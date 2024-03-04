import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
    navigate("/login");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder=""
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder=""
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            placeholder=""
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
