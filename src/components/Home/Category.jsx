import React from "react";
import { FaDog, FaBone, FaGift, FaCapsules } from "react-icons/fa";

const categories = [
  {
    icon: <FaDog size={50} className="text-purple-700" />,
    title: "Pets (Adoption)",
    desc: "Find your perfect furry companion and give them a loving home.",
  },
  {
    icon: <FaBone size={50} className="text-pink-700" />,
    title: "Pet Food",
    desc: "Healthy and nutritious food for dogs, cats, and more!",
  },
  {
    icon: <FaGift size={50} className="text-orange-600" />,
    title: "Accessories",
    desc: "Stylish collars, beds, and toys for your pets’ comfort.",
  },
  {
    icon: <FaCapsules size={50} className="text-green-700" />,
    title: "Pet Care Products",
    desc: "Everything you need to keep your pet clean, safe, and healthy.",
  },
];

const CategorySection = () => {
  return (
    <div className="py-16 bg-linear-to-r from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-purple-800 mb-2">
          Browse By Category
        </h2>
        <p className="text-gray-600 mb-10">
          Choose from our wide range of pet essentials
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
