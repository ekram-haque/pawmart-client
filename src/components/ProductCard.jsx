// Components/ListingCard.jsx
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ListingCard({ listing }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={listing.image || "https://via.placeholder.com/300"}
          alt={listing.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="p-4 w-full flex flex-col justify-between h-36">
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {listing.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {listing.category} | {listing.location}
          </p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <p className="text-indigo-600 font-bold">
            {listing.price ? `$${listing.price}` : "Free"}
          </p>
          <Link
            to={`/products/product-details/${listing._id}`}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            See Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
