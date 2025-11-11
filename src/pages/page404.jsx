import React from "react";
import { Link } from "react-router";
import { BiErrorCircle } from "react-icons/bi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 px-4">
      <BiErrorCircle className="text-purple-700 w-20 h-20 mb-6" />
      <h1 className="text-6xl font-extrabold text-purple-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        to="/home"
        className="px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
