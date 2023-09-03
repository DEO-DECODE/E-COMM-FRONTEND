import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const collectData = async () => {
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
      />
      <button className="appButton" type="button" onClick={collectData}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
