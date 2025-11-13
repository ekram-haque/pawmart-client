// Pages/PetsPage.jsx
import React, { useEffect, useState } from "react";
import ListingCard from "../components/ProductCard";

export default function PetsPage() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Fetch listings from server
  useEffect(() => {
    fetch("http://localhost:5000/products") // replace with your API
      .then(res => res.json())
      .then(data => setListings(data))
      .catch(err => console.error(err));
  }, []);

  // Filter & Search
  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter ? listing.category === categoryFilter : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Pets & Supplies</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border p-2 rounded w-20 sm:w-1/2"
        />
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
          className="border p-2 rounded w-20 sm:w-1/2"
        >
          <option value="">All Categories</option>
          <option value="Pets">Pets</option>
          <option value="Food">Food</option>
          <option value="Food">Pet Care Products</option>
          <option value="Accessories">Pet Accessories</option>
        </select>
      </div>

      {/* Listings Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredListings.map(listing => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
}
