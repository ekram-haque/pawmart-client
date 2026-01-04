import React, { useContext, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { AuthContext } from "../context/AuthContext";
import { Package, Layers, Clock } from "lucide-react";
import { Link } from "react-router";

const COLORS = ["#7C3AED", "#EC4899", "#22C55E", "#F59E0B"];

const DashboardOverview = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://pawmart-server-gamma.vercel.app/products?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);

  // 📊 Metrics
  const totalProducts = products.length;

  const categoryMap = {};
  products.forEach((p) => {
    categoryMap[p.category] = (categoryMap[p.category] || 0) + 1;
  });

  const categoryData = Object.keys(categoryMap).map((cat) => ({
    name: cat,
    value: categoryMap[cat],
  }));

  return (
    <div className="p-6 space-y-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* ================= Header ================= */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Visual summary of your added products
        </p>
      </div>

      {/* ================= Overview Cards ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Products */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
          <Package size={36} />
          <div>
            <p className="text-sm opacity-90">Total Products</p>
            <p className="text-3xl font-bold">{totalProducts}</p>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
          <Layers size={36} />
          <div>
            <p className="text-sm opacity-90">Categories</p>
            <p className="text-3xl font-bold">{categoryData.length}</p>
          </div>
        </div>

        {/* Latest Product */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-500 text-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
          <Clock size={36} />
          <div>
            <p className="text-sm opacity-90">Latest Product</p>
            <p className="font-semibold line-clamp-1">
              {products[0]?.name || "No products yet"}
            </p>
          </div>
        </div>
      </div>

      {/* ================= Charts ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Products by Category
          </h3>
          {categoryData.length ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={110}
                >
                  {categoryData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-400 mt-20">No data available</p>
          )}
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow">
          <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Category Distribution
          </h3>
          {categoryData.length ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={categoryData}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#7C3AED" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-400 mt-20">No data available</p>
          )}
        </div>
      </div>

      {/* ================= Product Table ================= */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="text-purple-600 dark:text-purple-400">📦</span>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Your Products
            </h3>
          </div>

          <span className="text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300 px-3 py-1 rounded-full">
            {products.length} items
          </span>
        </div>

        {products.length ? (
          <div className="overflow-x-auto rounded-xl border border-gray-100 dark:border-gray-800">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr className="text-gray-600 dark:text-gray-300">
                  <th className="p-3 text-left">Product</th>
                  <th className="p-3 text-left">Category</th>
                  <th className="p-3 text-left">Price</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => (
                  <tr
                    key={p._id}
                    className="group border-t dark:border-gray-800 hover:bg-purple-50/50 dark:hover:bg-gray-800 transition"
                  >
                    {/* Product */}
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <img
                          src={p.image || "https://via.placeholder.com/40"}
                          alt={p.name}
                          className="w-10 h-10 rounded-lg object-cover border"
                        />
                        <div>
                          <p className="font-medium text-gray-800 dark:text-gray-100">
                            {p.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            ID: {p._id.slice(0, 8)}...
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-3">
                      <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                        {p.category}
                      </span>
                    </td>

                    {/* Price */}
                    <td className="p-3">
                      <span className="font-semibold text-green-600 dark:text-green-400">
                        ${p.price}
                      </span>
                    </td>
                    {/* action button  */}
                    <td className="p-3">
                      <Link
                        to={`/product-details/${p._id}`}
                        className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold rounded-lg
      bg-purple-600 text-white hover:bg-purple-700 transition"
                      >
                        View
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-5xl mb-4">📦</div>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              You haven’t added any products yet
            </p>
            <button className="px-5 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
              Add Your First Product
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardOverview;
