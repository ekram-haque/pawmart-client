import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Pencil, Trash2 } from "lucide-react";

const dummyListings = [
  {
    id: 1,
    name: "Golden Retriever Puppy",
    category: "Pets",
    price: 0,
    location: "Dhaka",
    date: "2025-10-27",
  },
  {
    id: 2,
    name: "Dog Collar",
    category: "Accessories",
    price: 10,
    location: "Chattogram",
    date: "2025-10-25",
  },
  {
    id: 3,
    name: "Cat Food Pack",
    category: "Food",
    price: 20,
    location: "Sylhet",
    date: "2025-10-20",
  },
];

const MyListingsPage = () => {
  const [listings, setListings] = useState(dummyListings);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      setListings(listings.filter((item) => item.id !== id));
      toast.success("Listing Deleted Successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-12 px-6 transition-colors duration-300">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400">
          🐾 My Listings
        </h1>

        {/* Listing count */}
        <p className="ml-3 mb-5 mt-6 text-gray-500 dark:text-gray-300 text-sm text-left">
          Total Listings: <span className="font-semibold">{listings.length}</span>
        </p>

        <div className="overflow-x-auto shadow-xl rounded-2xl bg-white dark:bg-gray-800 transition-colors duration-300">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-purple-200 to-pink-200 dark:from-gray-700 dark:to-gray-700 text-gray-700 dark:text-gray-200">
                <th className="py-4 px-6 text-left font-semibold">Name</th>
                <th className="py-4 px-6 text-left font-semibold">Category</th>
                <th className="py-4 px-6 text-left font-semibold">Price ($)</th>
                <th className="py-4 px-6 text-left font-semibold">Location</th>
                <th className="py-4 px-6 text-left font-semibold">Date</th>
                <th className="py-4 px-6 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((item, index) => (
                <tr
                  key={item.id}
                  className={`transition-all hover:bg-purple-50 dark:hover:bg-gray-700 ${
                    index % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-700"
                  }`}
                >
                  <td className="py-4 px-6 font-medium text-gray-800 dark:text-gray-100">
                    {item.name}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">{item.category}</td>
                  <td className="py-4 px-6 text-gray-800 dark:text-gray-100 font-semibold">
                    ${item.price}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-300">{item.location}</td>
                  <td className="py-4 px-6 text-gray-500 dark:text-gray-400">{item.date}</td>
                  <td className="py-4 px-6 text-center space-x-3">
                    <button className="inline-flex items-center bg-yellow-400/90 dark:bg-yellow-500/80 hover:bg-yellow-500 dark:hover:bg-yellow-600 px-3 py-1.5 rounded-lg shadow-sm transition text-gray-800 dark:text-gray-900">
                      <Pencil className="w-4 h-4 mr-1" /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="inline-flex items-center bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white px-3 py-1.5 rounded-lg shadow-sm transition"
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyListingsPage;
