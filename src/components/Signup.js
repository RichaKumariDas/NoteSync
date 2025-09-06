import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../styles/Auth.css'; // Custom glassmorphism styles

const Signup = (props) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("https://notesync-ag8s.onrender.com/api/auth/createuser", { // Updated URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authtoken);
      props.showAlert("Account created successfully", "success");
      navigate("/");
    } else {
      props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-background">
      <div className="card">
        <h2>Create an account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={onChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name="email" onChange={onChange} required />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          {/* Password Input with Toggle */}
          <div className="mb-3" style={{ position: "relative" }}>
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              id="password"
              name="password"
              onChange={onChange}
              minLength={5}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="password-toggle"
            >
              {showPassword ? <FaEyeSlash color="yellow" /> : <FaEye color="yellow" />}
            </span>
          </div>

          {/* Confirm Password Input with Toggle */}
          <div className="mb-3" style={{ position: "relative" }}>
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input
              type={showCPassword ? "text" : "password"}
              className="form-control"
              id="cpassword"
              name="cpassword"
              onChange={onChange}
              minLength={5}
              required
            />
            <span
              onClick={() => setShowCPassword(!showCPassword)}
              className="password-toggle"
            >
              {showCPassword ? <FaEyeSlash color="yellow" /> : <FaEye color="yellow" />}
            </span>
          </div>

          <button type="submit" className="btn" style={{ width: "100%" }}>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
