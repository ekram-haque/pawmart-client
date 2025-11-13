import React from "react";
import { FaDog, FaBone, FaGift, FaCapsules } from "react-icons/fa";
import { Link } from "react-router";

const categories = [
  {
    icon: <FaDog size={50} className="text-purple-600 dark:text-purple-400" />,
    
    title: "Pets",
    desc: "Find your perfect furry companion and give them a loving home.",
  },
  {
    icon: <FaBone size={50} className="text-pink-600 dark:text-pink-400" />,
    title: "Food",
    desc: "Healthy and nutritious food for dogs, cats, and more!",
  },
  {
    icon: <FaGift size={50} className="text-orange-500 dark:text-orange-400" />,
   
    title: "Pet Accessories",
    desc: "Stylish collars, beds, and toys for your pets’ comfort.",
  },
  {
    icon: <FaCapsules size={50} className="text-green-600 dark:text-green-400" />,
    title: "Pet Care Products",
    desc: "Everything you need to keep your pet clean, safe, and healthy.",
  },
];

const CategorySection = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-purple-800 dark:text-pink-300 mb-3">
          🐾 Browse By Category
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Choose from our wide range of pet essentials
        </p>

        {/* Category Grid */}
        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <Link to={`/products/category-filtered-product/${encodeURIComponent(item.title)}`} className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
