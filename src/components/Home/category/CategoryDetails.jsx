import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { FadeLoader } from "react-spinners"; // npm i react-spinners
import ListingCard from "../../ProductCard";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/category-filtered-product/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-96">
        <FadeLoader color="#6366f1" />
      </div>
    );

  if (products.length === 0)
    return (
      <p className="text-center mt-10 text-gray-500">
        No products found in <span className="font-semibold">{category}</span> category.
      </p>
    );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Products in "{category}" category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {products.map((p) => (
  <motion.div
    key={p._id}
    className="border rounded-lg shadow hover:shadow-lg overflow-hidden bg-white dark:bg-gray-800 transition"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <img
      src={p.image || "https://via.placeholder.com/300"}
      alt={p.name}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{p.name}</h3>
      <p className="text-indigo-600 font-bold mt-1">{p.price ? `$${p.price}` : "Free for Adoption"}</p>
      <p className="text-gray-500 text-sm mt-1">{p.location}</p>

      {/* See Details Button */}
      <Link
        to={`/products/product-details/${p._id}`}
        className="mt-3 inline-block w-full text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
      >
        See Details
      </Link>
    </div>
  </motion.div>
))}
      </div>
    </div>
  );
};

export default CategoryProducts;
