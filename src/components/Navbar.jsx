import React from "react";
import logo from '../assets/logo.png'
import MyLink from "./MyLink";
import MyContainer from "./MyContainer";

const Navbar = () => {
  return (
    <div className=" shadow-md sticky bg-white top-0 z-50 backdrop-blur-md bg-opacity-80">

      <MyContainer>

      
      <div className="navbar ">

        <div className="navbar-start flex ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li>
                  <MyLink to={'/home'} >Home</MyLink>
                </li>
                <li>
                  <MyLink to={'/pet-supplies'} >Pet & Supplies</MyLink>
                </li>
                <li>
                  <MyLink to={'/blog'} >Blog</MyLink>
                </li>
                <li>
                  <MyLink to={'/add-listing-page'} >Add Listing</MyLink>
                </li>
                <li>
                  <MyLink to={'/My-listing-page'} >My Listing</MyLink>
                </li>
                <li>
                  <MyLink to={'/My-orders'} >My Order</MyLink>
                </li>
                <li>
                  <MyLink to={'/profile'} >My Profile</MyLink>
                </li>
            </ul>
          </div>
          <div>
            <img src={logo} alt="" className="w-20 h-20" />
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li>
                  <MyLink to={'/home'} >Home</MyLink>
                </li>
                <li>
                  <MyLink to={'/pet-supplies'} >Pet & Supplies</MyLink>
                </li>
                <li>
                  <MyLink to={'/blog'} >Blog</MyLink>
                </li>
                <li>
                  <MyLink to={'/add-listing-page'} >Add Listing</MyLink>
                </li>
                <li>
                  <MyLink to={'/My-listing-page'} >My Listing</MyLink>
                </li>
                <li>
                  <MyLink to={'/My-orders'} >My Order</MyLink>
                </li>
                <li>
                  <MyLink to={'/profile'} >My Profile</MyLink>
                </li>
                
          </ul>
        </div>

        <div className="navbar-end">
          <a className=" px-5 py-2 bg-linear-to-r from-purple-50 to-pink-50 rounded-md font-semibold hover:opacity-70 transition duration-300 shadow-md">Login</a>
        </div>
      
        
      </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
