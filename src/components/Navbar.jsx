import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo.png";
import MyLink from "./MyLink";
import MyContainer from "./MyContainer";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout, setUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleLogout = () => {
    logout()
      .then(() => setUser(null))
      .catch((error) => console.log("Logout Error:", error));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header
      className="
      sticky top-0 z-50
      backdrop-blur-md bg-linear-to-r from-purple-50 to-pink-50 dark:from-purple-600 dark:to-pink-600
      border-b border-gray-200 dark:border-gray-700
      transition-colors p-3
    "
    >
      <MyContainer>
        <div className="navbar">
          {/* LEFT */}
          <div className="navbar-start gap-2">
            {/* Mobile Menu */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                ☰
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 shadow rounded-xl
                bg-white dark:bg-gray-900 w-52"
              >
                <MyLink to="/">Home</MyLink>
                <MyLink to="/pet-supplies">Pet & Supplies</MyLink>
                <MyLink to="/blog">Blog</MyLink>
                <MyLink to="/about">About</MyLink>
                <MyLink to="/contact">Contact</MyLink>
              </ul>
            </div>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
              <span className="font-bold text-lg text-gray-800 dark:text-white hidden sm:block">
                PetCare
              </span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 font-medium">
              <MyLink to="/">Home</MyLink>
              <MyLink to="/pet-supplies">Pet & Supplies</MyLink>
              <MyLink to="/blog">Blog</MyLink>
              <MyLink to="/about">About</MyLink>
              <MyLink to="/contact">Contact</MyLink>
            </ul>
          </div>

          {/* RIGHT */}
          {/* RIGHT */}
          <div className="navbar-end gap-4">
            {/* Theme Toggle */}
            <input
              type="checkbox"
              className="toggle toggle-sm"
              checked={theme === "dark"}
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            />

            {/* AUTH UI */}
            {!user ? (
              <Link
                to="/login"
                className="px-4 py-2 rounded-md font-semibold text-white
      bg-gradient-to-r from-purple-600 to-pink-600
      hover:opacity-60 transition shadow"
              >
                Login
              </Link>
            ) : (
              <div className="dropdown dropdown-end ">
                <label tabIndex={0} className="  avatar">
                  <div className="w-10 rounded-full ring ring-purple-500 ring-offset-2">
                    <img src={user.photoURL || "/avatar.png"} alt="User" />
                  </div>
                </label>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content mt-3 p-3 shadow-lg rounded-xl
        bg-white dark:bg-gray-900 w-52"
                >
                  <MyLink to="/dashboard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-1.5 inline-block size-4"
                    >
                      <rect x="3" y="3" width="7" height="9" />
                      <rect x="14" y="3" width="7" height="5" />
                      <rect x="14" y="12" width="7" height="9" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                    <span className="ml-3">Dashboard</span>
                  </MyLink>
                  <MyLink to="/profile">
                    {/* User SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-1.5 inline-block size-4"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="ml-3">Profile</span>
                  </MyLink>

                  <Link
                    className="px-3 py-1 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={handleLogout}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="my-1.5 inline-block size-4"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <path d="M16 17l5-5-5-5" />
                      <path d="M21 12H9" />
                    </svg>

                    <span className="ml-3">Logout</span>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </MyContainer>
    </header>
  );
};

export default Navbar;
