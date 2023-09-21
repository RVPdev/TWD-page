import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css"
function Navbar() {
  // NavBar element
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="d-flex  navbar-container">
        <div className="navbar-brand">
          TWD Buyers
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Collection">Collection</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
