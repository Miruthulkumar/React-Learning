import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Navbar = () => {
  return (
    <div className="w-full fixed left-0 top-0 h-auto py-4 bg-black text-white flex  gap-4 justify-between z-1">
      <h1 className="ml-7">Miruthul's Study Center</h1>
      <ul className="flex gap-3 mr-7">
        <button>Sign Up</button>
        <button>Login</button>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string, // ensures 'name' is a string and required
};

export default Navbar;
