// Components/ListingCard.jsx
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ProductCard({ listing }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className=" bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] m-4 bg-gray-100 dark:bg-gray-800">
        <img
          src={listing.image || "https://via.placeholder.com/400"}
          alt={listing.name}
          className="w-full rounded-lg h-full object-cover"
          loading="lazy"
        />

        {/* Category Badge */}
        <span className=" absolute top-3 right-3 bg-linear-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-semibold text-white shadow ">
          {listing.category}
        </span>
      </div>

      {/* Content */}
      <div className=" p-4 flex flex-col gap-3 bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 ">
        {/* Title */}
        <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-purple-600 transition-colors">
          {listing.name}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
          {listing.description}
        </p>
        {/* Location */}
        <p className=" flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          📍 {listing.location}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {listing.price ? `$${listing.price}` : "Free Adoption"}
        </p>
        {/* Action */}
        <div className="pt-3 mt-auto">
          <Link
            to={`/products/product-details/${listing._id}`}
            className=" block w-full text-center text-sm font-medium text-white bg-linear-to-r from-purple-600 to-pink-600 rounded-md py-2 hover:from-purple-700 hover:to-pink-700 hover:p-3 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={`View details of ${listing.name}`}
          >
            View details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
