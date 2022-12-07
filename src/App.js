import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';

import SignUp from './components/signup';
import LogIn from './components/login';
import Home from './components/home';
import About from './components/about';
import { Helmet } from 'react-helmet';

import Dashboard from './components/dashboard';
import Account from './components/account';
import LogOut from './components/logout';

import AddResources from './components/AddResources';

import axios from 'axios';

// UF Color Pallette: https://www.uff.ufl.edu/toolkit/branding-style/colors/

axios.defaults.withCredentials = false;

/**
 * Renders Navigation Bar, background and performs routing
 * @summary Renders website aspects common to all pages
 * @author Kathleen Tiley, Thor Johansson
 */

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Sign Up" element={<SignUp />} />
        <Route path="Log In" element={<LogIn />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Account" element={<Account />} />
        <Route path="LogOut" element={<LogOut />} />

        <Route path="AddResources" element={<AddResources />} />
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
