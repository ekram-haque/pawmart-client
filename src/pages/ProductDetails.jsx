import React, { useState, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

const ProductDetails = () => {
  const product = useLoaderData();
  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    address: "",
    date: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = (e) => {
  e.preventDefault();

  const orderData = {
    buyerName: user?.displayName || "Anonymous User",
    buyerEmail: user?.email,           // backend GET /my-orders এ email check হবে
    productId: product._id,
    productName: product.name,
    price: product.price || 0,
    address: formData.address,
    date: formData.date,
    phone: formData.phone,
    notes: formData.notes,
  };

  // POST request to save order in MongoDB
  fetch("http://localhost:5000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("✅ Order saved:", data);
      toast.success("🎉 Order placed successfully!");

      // Reset form and close modal
      setShowModal(false);
      setFormData({ address: "", date: "", phone: "", notes: "" });
    })
    .catch((err) => {
      console.error("❌ Failed to save order:", err);
      toast.error("Failed to place order!");
    });
};

  const isOwner = user?.email === product.email;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full h-96 overflow-hidden">
          <img
            src={product.image || "https://via.placeholder.com/600x400"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-1">
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-1">
            <span className="font-semibold">Location:</span> {product.location}
          </p>
          <p className="text-gray-800 dark:text-gray-200 text-2xl font-semibold mb-4">
            {product.price ? `$${product.price}` : "Free for Adoption"}
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {product.description || "No description available."}
          </p>

          {/* Contact / Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
           

            {/* Show Adopt / Order button only if user isn't the owner */}
            {!isOwner && (
              <button
                onClick={() => setShowModal(true)}
                className="flex-1 text-center px-4 py-3 border bg-purple-600 text-white  rounded-lg hover:bg-purple-700 dark:hover:bg-gray-700 transition"
              >
                🛒 Adopt / Order Now
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 🧾 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative animate-slideUp">
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
              🧾 Adoption / Order Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Buyer Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Buyer Name
                </label>
                <input
                  type="text"
                  value={user?.displayName || "Anonymous User"}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email || ""}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              {/* Listing Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product / Listing
                </label>
                <input
                  type="text"
                  value={product.name}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Price ($)
                </label>
                <input
                  type="text"
                  value={product.price || "0"}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter your address"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Pick-up Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Optional notes..."
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transform transition"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
