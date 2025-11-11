import React, { useContext, useEffect, useState } from "react";
import logo from '../assets/logo.png'
import MyLink from "./MyLink";
import MyContainer from "./MyContainer";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user,logout,setUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

      const handlelogout =()  =>{
    logout().then(() =>{
      setUser(null)
    }).catch((error)=>{
        console.log("Logout Error:", error);
    })
  }

  useEffect(() => {
    const html = document.querySelector('html')
    html.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }

  return (
    <div className="shadow-md sticky top-0 z-50 backdrop-blur-md bg-opacity-80 bg-white dark:bg-black transition-colors duration-300">
      <MyContainer>
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start flex items-center">
            <div className="dropdown">
              <div tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <li><MyLink to="/home">Home</MyLink></li>
                <li><MyLink to="/pet-supplies">Pet & Supplies</MyLink></li>
                <li><MyLink to="/blog">Blog</MyLink></li>
                <li><MyLink to="/add-listing-page">Add Listing Page</MyLink></li>
                <li><MyLink to="/My-listing-page">My Listing Page</MyLink></li>
                <li><MyLink to="/My-orders">My Orders</MyLink></li>
                <li><MyLink to="/profile">Profile</MyLink></li>
              </ul>
            </div>
            <Link to={'/home'}>
            <img src={logo} alt="Logo" className="w-20 h-20 dark:bg-white rounded-full" />
            </Link>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><MyLink to="/">Home</MyLink></li>
              <li><MyLink to="/pet-supplies">Pet & Supplies</MyLink></li>
              <li><MyLink to="/blog">Blog</MyLink></li>
              <li><MyLink to="/add-listing-page">Add Listing Page</MyLink></li>
              <li><MyLink to="/My-listing-page">My Listing Page</MyLink></li>
              <li><MyLink to="/My-orders">My Orders</MyLink></li>
              <li><MyLink to="/profile">Profile</MyLink></li>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <input
              type="checkbox"
              className="toggle"
              onChange={(e) => handleTheme(e.target.checked)}
              checked={theme === "dark"}
            />

            {/* Login Button */}
            {user ? (
  <button
    onClick={handlelogout}
    className="px-5 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-800 dark:to-pink-700 rounded-md font-semibold hover:opacity-70 transition duration-300 shadow-md"
  >
    Logout
  </button>
) : (
  <MyLink
    to="/login"
    className="px-5 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-800 dark:to-pink-700 rounded-md font-semibold hover:opacity-70 transition duration-300 shadow-md"
  >
    Login
  </MyLink>
)}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
