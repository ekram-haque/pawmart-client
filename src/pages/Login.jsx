import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Logged in as ${formData.email}`);
    console.log("Login Data:", formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="py-10 flex items-center justify-center bg-linear-to-br from-purple-50 to-blue-100 px-4">
      <Toaster position="top-center" />
      <div className="bg-white shadow-2xl rounded-2xl max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6">Login to your account</p>

        {/* Manual Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition mt-2">
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="grow border-gray-300" />
          <span className="px-2 text-gray-400">or</span>
          <hr className="grow border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 transition">
            <FcGoogle size={24} /> Login with Google
          </button>
          <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 transition">
            <FaGithub size={24} /> Login with GitHub
          </button>
          <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 transition text-blue-600">
            <FaFacebook size={24} /> Login with Facebook
          </button>
        </div>

        <p className="text-center text-gray-500 mt-4">
          Don't have an account?{" "}
          <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
