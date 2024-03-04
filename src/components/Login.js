import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import axios from "axios";

const Home = () => {
  const [usersData, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [password, setPassword] = useState();
  const [vlaue, setValue] = useState(false);
  const Navigate = () => {
    navigate("/homePage", { state: user });
  };

  return (
    <div className="container">
      <form>
        <div>
          <label>Username</label>
          <input
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>

          <input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              usersData.map((info) => {
                if (info.username == user && info.password == password) {
                  Navigate();
                  console.log("there is correct information");
                } else {
                  console.log("there is uncorrect information");
                  console.log(info.usernam);
                  console.log(info.password);
                }
              });
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
