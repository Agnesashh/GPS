import React, { Component, useState, useEffect} from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import ReactDOM from 'react-dom/client';
import { Navigate } from 'react-router-dom';  
import { BrowserRouter, Routes, Route,useLocation, useNavigate,Switch, Link} from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SignUp from './SignUp';
import Home from './Home';
import Location from './Location';
import Profile from './Profile';
import History from './History'
import AdminSignup from './AdminSignup';
import RoleToggle from './RoleToggle';
import './gps.css'; 
import Login from './Login';  
import NavBar from './NavBar';




function App(){

  const navigate = useNavigate();
  const location = useLocation();

  const handleRoleSelect = (role) => {
    if (role === 'user') {
      navigate('/SignUp');
    } else if (role === 'admin') {
      navigate('/AdminSignUP');
    }
  };

  const showRoleToggle = location.pathname ==='/SignUp'|| location.pathname ==='/AdminSignUP';

  const hideNavBar = location.pathname === '/' || location.pathname === '/SignUp' || location.pathname === '/AdminSignUP';

  return(
    
    
    <div className='App'>

      {!hideNavBar && <NavBar />}

      {showRoleToggle && <RoleToggle onSelect={handleRoleSelect} />} 

      <Routes>  

        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/AdminSignUP" element={<AdminSignup/>}/>
        <Route path="/Location" element={<Location />} />
        <Route path="/Profile"  element={<Profile />} />
        <Route path="/History" element={<History />} />
        <Route path= "/Home" element={<Home/>}/>
      </Routes>
    </div>
  ) ; 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  
);
