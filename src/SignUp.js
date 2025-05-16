import React, { Component, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate } from 'react-router-dom';  
import { BrowserRouter, Routes, Route, useNavigate,Switch, Link} from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';


const CustomBodyStyle = createGlobalStyle
  `body{
  
  background-image: url(Background.png);
  background-size: cover;
  background-position: center;

  
  @media max(max-width: 768px){
  background-image: url(Background.png);

  }

}`;

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, user] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = () => {
      if (!name || !email || !password) {
          alert("Please fill in all fields.");
          return;
      }
    
      const url = "http://localhost/Gps-Php/signup.php";
      let fData = new FormData();
      fData.append('name', name);
      fData.append('email', email);
      fData.append('password', password);
    
      axios.post(url, fData)
        .then(response => {
          const data = response.data;
          if (data.error) {
            alert(data.error);
          } else {
            alert(data.message);
            navigate("/Home");
          }
        })
        .catch(error => alert(error.response?.data?.error || "An error occurred"));
    };
    return (
      <>
      <CustomBodyStyle/>
      <div className="container-fluid">
        <form className="mx-auto mt-5" method="post">
          <h2 className="text-center">Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="signupName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="signupName"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="signupEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="signupEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="signupPassword" className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="signupPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="showPasswordCheckbox"
              onChange={() => setShowPassword(!showPassword)}
            />
            <label className="form-check-label" htmlFor="showPasswordCheckbox">Show password</label>
          </div>
          <div className='buttons'>
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={handleSubmit}
          >
            Register
          </button>
          <Link to="/" className="btn btn-link mt-4">Login</Link>
          </div>
        </form>
  
  </div>
  </>

    );
  }
  export default SignUp;