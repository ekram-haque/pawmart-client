import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children, className }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "hover:underline hover:font-semibold "
            : `${className} hover:font-semibold`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;