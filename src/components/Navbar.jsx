import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    logout();
  };
  return (
    <>
      <nav className="flex flex-row bg-white justify-between px-4 py-4 align-middle items-center border border-b-slate-200 shadow-sm">
        <div>
          <Link to="/">
            <h1 className="text-[#002D74] text-2xl font-bold">Logo</h1>
          </Link>
        </div>
        <div>
          <ul className="flex flex-row gap-4 cursor-pointer font-semibold text-[#002D74]">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-4">
          {isAuthenticated ? (
            <div className="relative">
              <button
                className="flex items-center text-gray-800 hover:text-gray-600 focus:outline-none"
                onClick={toggleDropdown}
              >
                <img
                  className="h-8 w-8 rounded-full object-cover"
                  src="https://via.placeholder.com/150"
                  alt="User"
                />
                <span className="mx-2">Username</span>
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <div className="py-1">
                    <button
                      className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      onClick={() => console.log("View Profile")}
                    >
                      View Profile
                    </button>
                    <button
                      className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      onClick={handleSignOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link to="/login">
                <Button color="blue" text="Login" />
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
