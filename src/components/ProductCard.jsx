// Components/ListingCard.jsx
import React from "react";
import { Link, NavLink } from "react-router";

export default function ListingCard({ listing }) {
  console.log("Product Image URL:", listing.image);

  console.log( listing._id)
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
      <img
        src={listing.image || "https://via.placeholder.com/300"}
        alt={listing.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{listing.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">{listing.category}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{listing.location}</p>
        <p className="text-indigo-600 font-bold mt-2">{listing.price ? `$${listing.price}` : "Free"}</p>
        <Link to={`/products/product-details/${listing._id}`} className="mt-3  bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
          See Details
        </Link>
      </div>
    </div>
  );
}
