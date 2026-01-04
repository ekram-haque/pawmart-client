// Pages/PetsPage.jsx
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { AuthContext } from "../context/AuthContext";
import LoadingSkeleton from "../components/LoadingSkeleton";

export default function PetsPage() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Fetch listings from server
  useEffect(() => {
    fetch("https://pawmart-server-gamma.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter & Search
  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.name
      .toLowerCase()
      .trim()
      .includes(search.toLowerCase().trim());
    const matchesCategory = categoryFilter
      ? listing.category === categoryFilter
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen  p-6 bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Pets & Supplies
        </h1>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row justify-between items-center  mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border px-3 py-2 rounded-md w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Category Filter */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border px-3 py-2 rounded-md w-full sm:w-56 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">All Categories</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Pet Care Products">Pet Care Products</option>
            <option value="Accessories">Pet Accessories</option>
          </select>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
          {filteredListings.map((listing) => (
            <ProductCard key={listing._id} listing={listing} />
          ))}
        </div>
      </div>
    </div>
  );
}
