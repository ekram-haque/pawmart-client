import React from "react";

const Newsletter = () => {
  return (
    <section className="py-24 mb-20 bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition duration-300">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Subscribe to Our Newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Get the latest updates, helpful tips, and exclusive content delivered
          straight to your inbox. No spam — unsubscribe anytime.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-gray-800 dark:text-white"
          />

          <button
            type="submit"
            className="w-full sm:w-auto bg-linear-to-r from-purple-700 to-pink-600 hover:opacity-90 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Subscribe
          </button>
        </form>

        {/* Trust text */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          We respect your privacy. Your email will never be shared.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
