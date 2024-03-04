import React, { useReducer, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
const About = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return number;
      default:
        return state;
    }
  }
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const [number, setNumber] = useState(0);
  const [state, dispatch] = useReducer(reducer, number);
  return (
    <div className="container">
      <h1>{data ? data : "Gust"}</h1>
      <h3>the Number Now = {state}</h3>
      <div className="buttons">
        <button onClick={() => dispatch({ type: "increment" })}>Add</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Minus</button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
      <button onClick={() => navigate(-1)}>Logout</button>
    </div>
  );
};

export default About;
