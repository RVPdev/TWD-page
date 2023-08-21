import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  // NavBar element
  return (
    <nav className="shadow-md w-full fixed top-0 left-0 bg-secondaryDark">
      <div className=" items-center flex flex-wrap mx-7 justify-between py-4">
        <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-primaryText">
          TWD Buyers
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="text-secondaryText bg-secondaryDark flex flex-col p-4 mt-4 broder border-secondaryText rounded-lg md:p-0  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-secondaryDark md:dark:bg-secondaryDark dark:border-gray-700">
            <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:text-secondarySubtext duration-500" aria-current="page">
              <Link to="/">Home</Link>
            </li>
            <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:text-secondarySubtext duration-500">
              <Link to="/Collection">Collection</Link>
            </li>
            <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:text-secondarySubtext duration-500">
              <Link to="/About">About</Link>
            </li>
            <li className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 hover:text-secondarySubtext duration-500">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
