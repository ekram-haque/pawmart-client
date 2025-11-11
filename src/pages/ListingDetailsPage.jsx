import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ListingDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);

  // ✅ Static Listing
  const listing = {
    _id: "1",
    name: "Golden Retriever Puppy",
    category: "Pet",
    ownerEmail: "owner@pawmart.com",
    description:
      "A friendly, playful, and adorable golden retriever puppy looking for a loving home. Vaccinated and well-trained.",
    price: 250,
    location: "Dhaka, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1601758123927-1967c6a5e787?auto=format&fit=crop&w=1000&q=80",
  };

  // 👤 Static User Data
  const user = {
    name: "Ekramul Haque",
    email: "ekramul@example.com",
  };

  // 🧾 Form Data
  const [formData, setFormData] = useState({
    address: "",
    date: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Order placed successfully!");
    console.log("Order Info:", {
      ...formData,
      buyerName: user.name,
      email: user.email,
      listingId: listing._id,
      listingName: listing.name,
      price: listing.price,
    });
    setShowModal(false);
    setFormData({ address: "", date: "", phone: "", notes: "" });
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
            className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
            <h1 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
              {listing.name}
            </h1>
            <p className="text-gray-200 text-lg">{listing.location}</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-center mb-6">
            <p className="text-sm text-gray-600 bg-purple-100 px-3 py-1 rounded-full">
              🐾 Category: {listing.category}
            </p>
            <p className="text-2xl font-bold text-blue-700">
              💰 ${listing.price}
            </p>
          </div>

          <p className="text-gray-700 mb-5 leading-relaxed text-lg">
            {listing.description}
          </p>

          <p className="text-gray-600 text-sm mb-4">
            <span className="font-semibold">Owner Email:</span>{" "}
            {listing.ownerEmail}
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="mt-5 bg-linear-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:shadow-xl transform transition-all duration-300"
          >
            🛒 Adopt / Order Now
          </button>
        </div>
      </div>

      {/* 🧾 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-6 relative transform scale-100 animate-slideUp">
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
                  value={user.name}
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
                  value={user.email}
                  readOnly
                  className="w-full p-3 border rounded-lg bg-gray-100"
                />
              </div>

              {/* Listing */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Product / Listing
                </label>
                <input
                  type="text"
                  value={listing.name}
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
                  value={listing.price}
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
                  className="px-5 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transform transition"
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
