import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  return (
    <div className="py-10 flex items-center justify-center bg-linear-to-br from-purple-50 to-blue-100 px-4">
      <Toaster position="top-center" />
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign up to get started
        </p>

  

        {/* Manual Registration Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition mt-2">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
