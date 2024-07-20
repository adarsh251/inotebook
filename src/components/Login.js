import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authContext from "../context/notes/authContext";
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login}=useContext(authContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Email:", email);
    //console.log("Password:", password);
    const a=await login(email, password);
    if(a.name){
      navigate("/home");
    }
    else{
      console.log(a);
      window.alert(a.msg);
    }

  };

  return (
    <>
      <style>
        {`
        .login-container {
          display: flex;
        background-color:white;
  flex-direction: row-reverse;
  height: 100vh;
}

.login-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-image img {
  margin-right:20px;
  background-color:#ffffff;
  max-width: 100%;
  height: auto;
}

.login-form-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

.login-form {
  display:flex;
  flex-direction:column;
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  position:relative;
}

.form-group {
  height:3rem;
  margin-top:1em;
  margin-bottom:1em;
  position:relative;
}

label {
  font-size: 1rem;
  position:absolute;
  margin-top:1rem;
  margin-bottom:1rem;
  padding-left:0.5rem;
  padding-right:0.5rem;
  height:1rem;
  text-align: center;
  font-weight: bold;
  transition: all 0.3s ease;
  color:#541c7c;
}

input {
  font-size: 1rem;
  padding-left:1rem;
  position:absolute;
  width: 100%;
  height: 3rem;
  background-color:transparent;
  border:1px solid #541c7c;
  border-radius:0.5em;
  outline:none;
}

input:is(:focus,:valid){
  border:1px solid #f4c41b;
  box-shadow: 0 0 5px #f4c41b;
}
input:not([value=""]) + label,input:is(:focus,:valid) + label{
  color:#f4b414;
  transform: translate(0rem,-1.5rem) scale(0.9);
  padding-left:0.3rem;
  padding-right:0.3rem;
  z-index: 1111;
  background-color:#ffffff;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #f3c016;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #e6b102;
}

.signup-link {
  text-align: center;
  margin-top: 10px;
}

.signup-link a {
  color: #007BFF;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
}
        `}
      </style>
      <div className="login-container">
      <div className="login-image">
        <img src={process.env.PUBLIC_URL+'/white.png'} alt="Login Illustration" />
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">            
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email*</label>
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              minLength="5"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password*</label>
          </div>
          <button type="submit" className="submit-button">Login</button>
          <div className="signup-link">
          Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
