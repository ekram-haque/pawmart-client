import React, { useContext, useEffect, useState } from "react";
import { useParams, Navigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const ListingDetailsPage = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // 🧾 Form Data
  const [formData, setFormData] = useState({
    address: "",
    date: "",
    phone: "",
    notes: "",
  });

  // 🔹 Fetch product details
  useEffect(() => {
    fetch(
      `https://pawmart-server-gamma.vercel.app/products/product-details/${id}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch listing");
        }
        return res.json();
      })
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // 🔐 Guard
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading listing...
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="text-center py-20 text-red-500">
        Listing not found
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      ...formData,
      buyerName: user.displayName,
      buyerEmail: user.email,
      listingId: listing._id,
      listingName: listing.name,
      price: listing.price,
      image: listing.image,
      createdAt: new Date(),
    };

    try {
      const res = await fetch(
        "https://pawmart-server-gamma.vercel.app/orders",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      if (!res.ok) {
        throw new Error("Order failed");
      }

      toast.success("🎉 Order placed successfully!");
      setShowModal(false);
      setFormData({ address: "", date: "", phone: "", notes: "" });
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to place order");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-100 py-10 px-5">
      <Toaster position="top-center" />

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative group">
          <img
            src={listing.image}
            alt={listing.name}
            className="w-full h-[450px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-4xl font-extrabold text-white mb-2">
              {listing.name}
            </h1>
            <p className="text-gray-200 text-lg">{listing.location}</p>
          </div>
        </div>

        {/* Details */}
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <span className="text-sm bg-purple-100 px-3 py-1 rounded-full">
              🐾 {listing.category}
            </span>
            <span className="text-2xl font-bold text-blue-700">
              💰 ${listing.price}
            </span>
          </div>

          <p className="text-gray-700 text-lg mb-5">
            {listing.description}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Owner:</strong> {listing.email}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            🛒 Adopt / Order Now
          </button>
        </div>
      </div>

      {/* 🧾 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
              Order Form
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                value={user.displayName || ""}
                readOnly
                className="w-full p-3 border rounded bg-gray-100"
              />
              <input
                value={user.email || ""}
                readOnly
                className="w-full p-3 border rounded bg-gray-100"
              />
              <input
                value={listing.name}
                readOnly
                className="w-full p-3 border rounded bg-gray-100"
              />

              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />

              <textarea
                name="notes"
                placeholder="Notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-3 border rounded"
              />

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-400 text-white rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded"
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

export default ListingDetailsPage;
