import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  // NavBar element
  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-secondaryDark py-4 md:px-10 px7">
        <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-primaryText">
          TWD
        </div>
        <ul className="text-secondaryText md:flex md:items-center">
          <li className="md:ml-8 text-l hover:text-secondarySubtext duration-500">
            <Link to="/">Home</Link>
          </li>
          <li className="md:ml-8 text-l hover:text-secondarySubtext duration-500">
            <Link to="/Collection">Collection</Link>
          </li>
          <li className="md:ml-8 text-l hover:text-secondarySubtext duration-500">
            <Link to="/About">About</Link>
          </li>
          <li className="md:ml-8 text-l hover:text-secondarySubtext duration-500">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
