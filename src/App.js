import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/MainPage";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homePage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
