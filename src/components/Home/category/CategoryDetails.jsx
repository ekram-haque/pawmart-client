import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import { FadeLoader } from "react-spinners"; // npm i react-spinners
import ProductCard from "../../ProductCard";

const CategoryProducts = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/products/category-product/${category}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        No products found in <span className="font-semibold">{category}</span>{" "}
        category.
      </p>
    );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Products in "{category}" category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
        {products.map((p) => (
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className=" bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] m-4 bg-gray-100 dark:bg-gray-800">
              <img
                src={p.image || "https://via.placeholder.com/400"}
                alt={p.name}
                className="w-full h-full rounded-xl object-cover"
                loading="lazy"
              />

              {/* Category Badge */}
              <span className=" absolute top-3 right-3 bg-linear-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-xs font-semibold text-white shadow ">
                {p.category}
              </span>
            </div>

            {/* Content */}
            <div className=" p-4 flex flex-col gap-3 bg-linear-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 ">
              {/* Title */}
              <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 leading-snug line-clamp-2 group-hover:text-purple-600 transition-colors">
                {p.name}
              </h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                {p.description}
              </p>
              {/* Location */}
              <p className=" flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                📍 {p.location}
              </p>

              {/* Price */}
              <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {p.price ? `$${p.price}` : "Free Adoption"}
              </p>
              {/* Action */}
              <div className="pt-3 mt-auto">
                <Link
                  to={`/products/product-details/${p._id}`}
                  className=" block w-full text-center text-sm font-medium text-white bg-linear-to-r from-purple-600 to-pink-600 rounded-md py-2 hover:from-purple-700 hover:to-pink-700 hover:p-3 transition focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label={`View details of ${p.name}`}
                >
                  View details
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
