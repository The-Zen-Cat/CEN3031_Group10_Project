import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/signup';
import LogIn from './components/login';
import Home from './components/home';
import About from './components/about';

// it works! start making it look nice. And it needs to default to the home page, may not be.

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "About" element = {<About />} />
        <Route path = "SignUp" element = {<SignUp />} />
        <Route path = "LogIn" element = {<LogIn />} />
      </Routes>
      <div
        className="head"
        style={{
        width: "fit-content",
        margin: "auto",
        }}
      >
        <h1
        style={{
          color: "orange",
        }}
        >
        Picture a Great Website Here!
        </h1>
      </div>
    </>
  );
}

export default App;
