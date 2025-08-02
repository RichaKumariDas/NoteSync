import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "./logo.png"; // 🟡 Use your image path here

const Navbar = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg glass-navbar fixed-top">
      <div className="container-fluid">
        {/* 🔰 Logo at the very left */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="NoteSync Logo"
            style={{
              height: "40px",
              width: "40px",
              scale: "1.6",
              borderRadius: "12px",
              marginRight: "30px",
            }}
          />
          <span className="brand-title">NoteSync</span>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Login / Logout Buttons */}
          {localStorage.getItem("token") ? (
            <button className="btn btn-sm mx-1" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <form className="d-flex">
              <Link className="btn btn-sm mx-1" to="/login">
                Login
              </Link>
              <Link className="btn btn-sm mx-1" to="/signup">
                Signup
              </Link>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
