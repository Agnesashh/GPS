import React, { useState } from "react";

import { useNavigate, Link} from "react-router-dom";
import axios from "axios";
import { createGlobalStyle } from 'styled-components';
import SignUp from './SignUp';


const CustomBodyStyle = createGlobalStyle
  `body{
  
  background-image: url(Background.png);
  background-size: cover;
  background-position: center;
  height: 90vh;

  
  @media max(max-width: 768px){
  background-image: url(Background.png);

  }

}`;


function Login() {



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const url = "http://localhost/Gps-Php/login.php";
    let fData = new FormData();
    fData.append('email', email);
    fData.append('password', password);

    axios.post(url, fData)
    .then(response => {
      const data = response.data;
      if (data.success) {
        alert(data.message);
        navigate("/Home"); 
      } else {
        setError(data.error || "Login failed");
      }
    })
    .catch(error => {
      setError(error.response?.data?.error || "An error occurred. Please try again.");
    });
  };

  return (
    <>
      <CustomBodyStyle />
      <div className="container-fluid fixed-form-container">
        <form className="mx-auto mt-5" onSubmit={handleSubmit} method="post">
          <h2>Login</h2>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className='buttons'>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
            <Link to="/SignUp" className="btn btn-link mt-4">SignUp</Link>
          
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;