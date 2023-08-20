import React from "react";

function Navbar () {
    // NavBar element
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
          <div className="md:flex bg-secondaryDark py-4 md:px-10 px7">
            <div className="font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-primaryText">
              TWD
            </div>
          </div>
        </div>
    );
}

export default Navbar;