import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import Container from "./MyContainer";
import {  FaYoutube, FaFacebook } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-300 shadow-md pt-20 pb-6 transition duration-300">
      <Container>
        <div className="px-6 text-center md:text-left">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10 mb-10">
            {/* Brand Info */}
            <div className="space-y-6">
              <Link
                to="/home"
                className="flex items-center justify-center md:justify-start gap-3"
              >
                <img
                  src={logo}
                  alt="PawMart Logo"
                  className="w-28 h-28 dark:bg-white rounded-full"
                />
                <span className="text-2xl font-extrabold text-purple-800 dark:text-purple-300">
                  PawMart Shop
                </span>
              </Link>
              <p className="text-md leading-relaxed font-medium">
                PawMart connects local pet owners and buyers for adoption and
                pet care products.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 border-b border-purple-400 dark:border-purple-500 inline-block pb-1">
                Quick Links
              </h3>
              <ul className="space-y-2 mt-4">
                {["Home", "Blog", "Food", "Accessories"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="hover:text-purple-500 dark:hover:text-purple-400 transition font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold mb-3 border-b border-purple-400 dark:border-purple-500 inline-block pb-1">
                Follow Us
              </h3>
              <div className="flex justify-center md:justify-start gap-5 mt-5">
                <a
                  href="#"
                  className="hover:scale-110 transition text-black dark:text-white"
                >
                  <SiX size={26} />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition text-black dark:text-white"
                >
                  <FaYoutube size={26} />
                </a>
                <a
                  href="#"
                  className="hover:scale-110 transition text-black dark:text-white"
                >
                  <FaFacebook size={26} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 dark:border-gray-700 pt-5 text-center">
            <p className="text-sm">
              ©{" "}
              <span className="font-semibold text-purple-800 dark:text-purple-400">
                PawMart Ltd
              </span>{" "}
              — All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
