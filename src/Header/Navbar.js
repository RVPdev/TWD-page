import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Navbar.css";
function Navbar() {
  // NavBar element
  return (
    <nav className="navbar bg-light border-bottom border-body">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          TWDBuyers
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
