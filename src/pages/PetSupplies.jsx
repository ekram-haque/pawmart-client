import React, { useState } from "react";

const allListings = [
  {
    id: 1,
    name: "Golden Retriever Puppy",
    category: "Pets",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    price: "Free for Adoption",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Cat Food Pack",
    category: "Pet Food",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    price: "$15",
    location: "Chattogram, Bangladesh",
  },
  {
    id: 3,
    name: "Dog Collar with Bell",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    price: "$8",
    location: "Khulna, Bangladesh",
  },
  {
    id: 4,
    name: "Pet Vitamin Supplements",
    category: "Pet Care Products",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    price: "$20",
    location: "Rajshahi, Bangladesh",
  },
  {
    id: 5,
    name: "Siamese Cat",
    category: "Pets",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
    price: "Free for Adoption",
    location: "Sylhet, Bangladesh",
  },
  {
    id: 6,
    name: "Pet Shampoo",
    category: "Pet Care Products",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    price: "$10",
    location: "Barishal, Bangladesh",
  },
];

const categories = ["All", "Pets", "Pet Food", "Accessories", "Pet Care Products"];

const PetsSuppliesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter listings by category
  const filteredListings =
    selectedCategory === "All"
      ? allListings
      : allListings.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 min-h-screen transition-colors duration-300">
      <div className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-8 text-center">
          🐾 Pets & Supplies
        </h1>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? "bg-purple-700 text-white dark:bg-purple-600 dark:text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-xl transition-colors duration-300"
            >
              <img
                src={listing.image}
                alt={listing.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                {listing.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                Category: {listing.category}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                📍 {listing.location}
              </p>
              <p className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-3">
                {listing.price}
              </p>
              <button className="bg-gradient-to-r from-purple-700 to-pink-600 dark:from-purple-600 dark:to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition w-full">
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetsSuppliesPage;
