import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children, className }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "hover:underline hover:font-semibold underline font-semibold bg-linear-to-r from-purple-50 to-pink-50 px-2   "
            : `${className} hover:font-semibold`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;