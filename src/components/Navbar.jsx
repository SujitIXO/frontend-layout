import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    logout();
    navigate("/")
  };
  return (
    <>
      <nav className="flex flex-row bg-white justify-between px-4 py-3 align-middle items-center border border-b-slate-200 shadow-sm">
        <div>
          <Link to="/">
            <h1 className="text-[#002D74] text-2xl font-bold">Logo</h1>
          </Link>
        </div>
        <div className="block md:hidden">
          <RxHamburgerMenu />
        </div>
        <div className="hidden md:flex">
        {isAuthenticated ? (
          <div>
            <ul className="flex flex-row gap-4 cursor-pointer font-semibold text-[#002D74] ">
              <li>
                <Link className="nav-link nav-link-ltr" to="/home">Home</Link>
              </li>
              <li>
                <Link className="nav-link nav-link-ltr" to="/about-us">About us</Link>
              </li>
              <li>
                <Link className="nav-link nav-link-ltr" to="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link className="nav-link nav-link-ltr" to="/services">Services</Link>
              </li>
              <li>
                <Link className="nav-link nav-link-ltr" to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul className="flex flex-row gap-4 cursor-pointer font-semibold text-[#002D74]">
              <li>
                <Link className="nav-link nav-link-ltr" to="/home">Home</Link>
              </li>
              <li>
                <Link className="nav-link nav-link-ltr" to="/about-us">About us</Link>
              </li>
              <li>
                <Link className="nav-link nav-link-ltr" to="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link className="nav-link nav-link-ltr" to="/services">Services</Link>
              </li>
            </ul>
          </div>
        )}
        </div>
        <div className="md:flex hidden flex-row gap-4">
          {isAuthenticated ? (
            <div className="relative" ref={dropdownRef}>
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
                    <button className="block w-full px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
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
              <Link to="/">
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
