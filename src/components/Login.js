import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    try {
      const response = await fetch("/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (json.accessToken) {
        
        localStorage.setItem('token', json.accessToken);
        window.location.href = "/home";

      } else {
        // handle login error
        
        console.error("Login failed", json.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <style>
        {`
        .login-container {
  display: flex;
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
  max-width: 100%;
  height: auto;
}

.login-form-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
}

.login-form {
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
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
        <img src="https://st2.depositphotos.com/1001599/43046/v/450/depositphotos_430460192-stock-illustration-sign-page-abstract-concept-vector.jpg" alt="Login Illustration" />
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-button">Login</button>
          <div className="signup-link">
            <Link to="/signup">New user? Signup here</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default Login;
