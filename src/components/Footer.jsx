import React from "react";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import Container from "./MyContainer";

const Footer = () => {
  return (
    <div className="bg-linear-to-r from-purple-50 to-pink-50 shadow-md pt-25 pb-5  ">
      <Container>
        <div className="  px-6 text-center md:text-left">
          {/* Top Section - Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 mb-8">
            {/* Brand Info */}
            <div className="space-y-6">
              <Link to="/home" className="flex items-center gap-2">
                <img
                  src={logo}
                  alt="pawmart Logo"
                  className="w-40 h-40 rounded-full border-2  shadow-lg"
                />
                <span className="text-xl font-extrabold ">PawMart Shop</span>
              </Link>
              <p className="text-md font-semibold text-center leading-relaxed">
                PawMart connects local pet owners and buyers for adoption and
                pet care products
              </p>
            </div>

            {/* Quick Links */}
            <div className="items-center text-center">
              <h3 className="text-lg font-semibold mb-3 border-b  inline-block pb-1">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    food
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-purple-300 transition">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="items-center text-center">
              <h3 className="text-lg font-semibold mb-3 border-b  inline-block pb-1">
                Follow Us
              </h3>
              <div className="flex text-center items-center justify-center  gap-4 mt-3">
                {/* Twitter */}
                <a href="#" className="hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current "
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>

                {/* YouTube */}
                <a href="#" className="hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>

                {/* Facebook */}
                <a href="#" className="hover:scale-110 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current "
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t text-center">
            <p>
              ©<span className="font-semibold">PawMart Ltd</span> — All rights
              reserved.
            </p>
          </div>
        </div>{" "}
      </Container>
    </div>
  );
};

export default Footer;
