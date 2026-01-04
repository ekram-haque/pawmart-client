// Components/Statistics.jsx
import React from "react";

const stats = [
  { value: "5K+", label: "Pets Adopted" },
  { value: "12K+", label: "Happy Families" },
  { value: "800+", label: "Active Listings" },
  { value: "98%", label: "Success Rate" },
];

const Statistics = () => {
  return (
    <section className="py-16 mb-20 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 text-purple-100 max-w-2xl mx-auto text-sm md:text-base">
            Trusted by thousands of pet lovers, we are making adoption easier,
            safer, and more meaningful every day.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-purple-100">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistics;
