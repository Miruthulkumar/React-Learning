import React from "react";
import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // remove login info
    navigate("/login"); // redirect to login page
  };

  const isLoggedIn = localStorage.getItem("user");

  return (
    <div className="fixed top-0 left-0 z-10 flex w-full items-center justify-between bg-black py-4 px-6 text-white shadow-md">
      <h1 className="text-lg font-semibold">Miruthul's Study Center</h1>

      <ul className="flex items-center gap-4">
        {!isLoggedIn ? (
          <>
            <button
              onClick={() => {
                console.log("sign up working");
              }}
              className="rounded-2xl bg-blue-500 px-4 py-1 text-sm font-medium hover:bg-blue-600 transition"
            >
              Sign Up
            </button>

            <Link
              to="/login"
              className="rounded-2xl bg-blue-500 px-4 py-1 text-sm font-medium hover:bg-blue-600 transition"
            >
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="rounded-2xl bg-red-500 px-4 py-1 text-sm font-medium hover:bg-red-600 transition"
          >
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string,
};

export default Navbar;