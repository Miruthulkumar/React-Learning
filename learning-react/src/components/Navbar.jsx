import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-1 flex h-auto w-full justify-between gap-4 bg-black py-4 text-white">
      <h1 className="ml-7">Miruthul's Study Center</h1>
      <ul className="mr-7 flex gap-3">
        <button
          onClick={() => {
            console.log("sign up working");
          }}
          className="rounded-2xl bg-blue-400 px-2"
        >
          Sign Up
        </button>
        <Link
          to="/login"
          onClick={() => {
            console.log("Login button working");
          }}
          className="rounded-2xl bg-blue-400 px-4"
        >
          Login
        </Link>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string, // ensures 'name' is a string and required
};

export default Navbar;
