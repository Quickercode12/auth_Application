import React, { useState } from "react";
import "./App.css"; // Assuming you have some styles in App.css
import axios from "axios";

function Authapplication() {
  const [login, setLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("/register", {
        name,
        email,
        password,
      });
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={login ? "active" : ""}
            onClick={() => setLogin(true)}
          >
            Login
          </button>
          <button
            className={!login ? "active" : ""}
            onClick={() => setLogin(false)}
          >
            SignUp
          </button>
        </div>
        {login ? (
          <div className="form">
            <h1>Login Form</h1>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
            <p>
              forgot password{" "}
              <a href="##" onClick={() => setLogin(false)}>
                SignUp
              </a>
            </p>
          </div>
        ) : (
          <div className="form">
            <h1>SignUp Form</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>SignUp</button>
            <p>
              Already have an account?{" "}
              <a href="##" onClick={() => setLogin(true)}>
                Login
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Authapplication;
