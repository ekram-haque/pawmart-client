import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router";

export default function LoginPage() {
  return (
    <div className="py-10 flex items-center justify-center bg-linear-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 transition-colors duration-300 min-h-screen">
      <Toaster position="top-center" />
      <div className="bg-white dark:bg-gray-800 shadow-2xl dark:shadow-gray-900 rounded-2xl max-w-md w-full p-8 transition-colors duration-300">
        <h1 className="text-3xl font-bold text-center text-indigo-700 dark:text-indigo-400 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-6">
          Login to your account
        </p>

        {/* Manual Login Form */}
        <form onSubmit={""} className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Email</label>
            <input
              type="email"
              name="email"
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
              required
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
            />
          </div>
          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition mt-2">
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="grow border-gray-300 dark:border-gray-600" />
          <span className="px-2 text-gray-400 dark:text-gray-300">or</span>
          <hr className="grow border-gray-300 dark:border-gray-600" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col gap-3 mb-6">
          <button
            onClick={""}
            className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <FcGoogle size={24} /> Login with Google
          </button>
          <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <FaGithub size={24} /> Login with GitHub
          </button>
          <button className="flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-blue-600">
            <FaFacebook size={24} /> Login with Facebook
          </button>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-300 mt-4">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline cursor-pointer"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
