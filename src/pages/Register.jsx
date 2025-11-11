import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    bio: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    toast.success(`Account created for ${formData.name}`);
    console.log("Register Data:", formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      bio: "",
    });
  };

  return (
    <div className="py-10 flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 min-h-screen transition-colors duration-300">
      <Toaster position="top-center" />
      <div className="bg-white dark:bg-gray-800 shadow-2xl dark:shadow-gray-900 rounded-2xl max-w-md w-full p-8 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-6">
          Create Account
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
          Sign up to get started
        </p>

        {/* Manual Registration Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter your location"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>

          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition mt-2">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline cursor-pointer"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
