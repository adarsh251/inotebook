import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle the signup logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    const response = await fetch('/user/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*'
      },
      body: JSON.stringify({
        "user":name,
        "email":email,
        "password":password
      })
    });
    const json = await response.json();
    console.log(json);
    window.location.href = "/";
  };

  return (
    <>
    <style>
        {
            `
            .signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.signup-form-container {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
}

.signup-form {
  width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #45a049;
}

.login-link {
  text-align: center;
  margin-top: 10px;
}

.login-link a {
  color: #007BFF;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}

            `
        }
    </style>
    <div className="signup-container">
      <div className="signup-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
          </div>
          <button type="submit" className="submit-button">Signup</button>
          <div className="login-link">
            <Link to="/">Already have an account? Login here</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Signup;
