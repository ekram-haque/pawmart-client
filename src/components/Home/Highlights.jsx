// Components/Highlights.jsx
import React from "react";

const highlights = [
  {
    icon: "🐾",
    title: "Verified Listings",
    desc: "All pets are verified to ensure safety, authenticity, and trust.",
  },
  {
    icon: "❤️",
    title: "Adopt with Love",
    desc: "We connect loving families with pets who need a forever home.",
  },
  {
    icon: "🛡️",
    title: "Secure Platform",
    desc: "Your data and interactions are protected with modern security.",
  },
  {
    icon: "⚡",
    title: "Fast & Easy",
    desc: "Browse, connect, and adopt pets in just a few simple steps.",
  },
];

const Highlights = () => {
  return (
    <section className="w-11/12 mx-auto rounded-lg py-16 mb-20  bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6">
            Why Choose Our Platform?
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We make pet adoption simple, safe, and meaningful for everyone.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="
                p-6 rounded-xl
                bg-gradient-to-r from-purple-50 to-pink-50
                dark:from-gray-800 dark:to-gray-700
                text-center
                hover:shadow-lg transition
              "
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
