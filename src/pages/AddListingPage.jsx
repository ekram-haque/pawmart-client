import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddListingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "Pets",
    price: "",
    location: "",
    description: "",
    image: "",
    date: "",
    email: "user@example.com", // logged-in user email (readonly)
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Listing Added Successfully!");
    setFormData({
      name: "",
      category: "Pets",
      price: "",
      location: "",
      description: "",
      image: "",
      date: "",
      email: "user@example.com",
    });
  };

  return (
  <div className="bg-linear-to-r from-purple-50 to-pink-50">
      <div className="max-w-5xl   mx-auto py-12 px-4">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold text-purple-700 mb-6">➕ Add Listing</h1>

      <form
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product / Pet Name"
            required
            className="border px-4 py-2 rounded-md w-full"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="border px-4 py-2 rounded-md w-full"
          >
            <option value="Pets">Pets</option>
            <option value="Pet Food">Pet Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Pet Care Products">Pet Care Products</option>
          </select>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price (0 if Pet)"
            required
            className="border px-4 py-2 rounded-md w-full"
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            required
            className="border px-4 py-2 rounded-md w-full"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded-md w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="border px-4 py-2 rounded-md w-full bg-gray-100 cursor-not-allowed"
          />
        </div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          className="border px-4 py-2 rounded-md w-full"
          required
        ></textarea>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="border px-4 py-2 rounded-md w-full"
          required
        />

        <button
          type="submit"
          className="bg-linear-to-r from-purple-200 to-pink-200 text-purple-700  px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Add Listing
        </button>
      </form>
    </div>
  </div>
  );
};

export default AddListingPage;
