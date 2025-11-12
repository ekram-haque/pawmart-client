import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { sendEmailVerification, updateProfile } from "firebase/auth";

export default function RegisterPage() {

  const { createUserwithEmailPassfunc, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value; // Photo URL input
    console.log("clicked", { email, password, displayName, photoURL });

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!regex.test(password)) {
      toast.error("Weak password");
      return;
    }

    createUserwithEmailPassfunc(email, password)
      .then((res) => {
        updateProfile(res.user, { displayName, photoURL })
          .then(() =>
            sendEmailVerification(res.user).then(() => {
              toast.success("Check your email to verify your account!");
              setUser(null);
              navigate("/login");
            })
          )
          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
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

        {/* Registration Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Full Name</label>
            <input type="text" name="name" required placeholder="Enter your full name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"/>
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input type="email" name="email" required placeholder="Enter your email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"/>
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Password</label>
            <input type="password" name="password" required placeholder="Enter your password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"/>
          </div>

      

          {/* New Photo URL input */}
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Photo URL</label>
            <input type="url" name="photo" placeholder="Enter photo URL" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"/>
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Location</label>
            <input type="text" name="location" placeholder="Enter your location" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"/>
          </div>

          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Bio</label>
            <textarea name="bio" placeholder="Tell us about yourself" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"/>
          </div>

          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition mt-2">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline cursor-pointer">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
