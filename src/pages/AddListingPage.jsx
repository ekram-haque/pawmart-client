import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddListing = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = category === "Pets" ? 0 : parseFloat(form.price.value);
    const location = form.location.value;
    const description = form.description.value;
    const image = form.image.value;
    const date = form.date.value;
    const email = user?.email;

    const newListing = {
      name,
      category,
      price,
      location,
      description,
      image,
      date,
      email,
      createdAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newListing),
      });

      if (res.ok) {
        toast.success("✅ Listing added successfully!");
        form.reset();
      } else {
        toast.error("Failed to add listing!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-5 text-center">🧺 Add New Listing</h2>
      <form onSubmit={handleAddListing} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block font-medium mb-1">Product / Pet Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border p-2 rounded"
            placeholder="Enter product name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <select name="category" required className="w-full border p-2 rounded">
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border p-2 rounded"
            placeholder="Enter price (0 for pets)"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            required
            className="w-full border p-2 rounded"
            placeholder="Enter location"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            required
            rows="3"
            className="w-full border p-2 rounded"
            placeholder="Describe your product or pet"
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            required
            className="w-full border p-2 rounded"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block font-medium mb-1">Pick Up / Available Date</label>
          <input
            type="date"
            name="date"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block font-medium mb-1">Owner Email</label>
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="w-full border p-2 rounded bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white font-semibold py-2 rounded hover:bg-indigo-700"
        >
          {loading ? "Adding..." : "Add Listing"}
        </button>
      </form>
    </div>
  );
};

export default AddListing;
