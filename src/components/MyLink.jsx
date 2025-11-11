import React from "react";
import { NavLink } from "react-router"; 

const MyLink = ({ to, children, className }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-3 py-1 rounded-md transition duration-300 ${
          isActive
            ? "bg-linear-to-r from-purple-200 to-pink-200 dark:from-purple-600 dark:to-pink-600 text-gray-900 dark:text-white font-semibold"
            : "text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
        } ${className || ""}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyLink;
