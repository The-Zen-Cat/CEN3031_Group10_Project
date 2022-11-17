import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import SignUp from './components/signup';
import LogIn from './components/login';
import Home from './components/home';
import About from './components/about';
import {Helmet} from 'react-helmet';

// UF Color Pallette: https://www.uff.ufl.edu/toolkit/branding-style/colors/

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "About" element = {<About />} />
        <Route path = "SignUp" element = {<SignUp />} />
        <Route path = "Log In" element = {<LogIn />} />
      </Routes>
      <div className="application">
          <Helmet>
              <style>{'body { background-color: rgb(137,207,240,.4); }'}</style>
          </Helmet>
      </div>
    </>
  );
}

export default App;
