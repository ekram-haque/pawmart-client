import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import LoadingSkeleton from "../components/LoadingSkeleton";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingItem, setEditingItem] = useState(null);

  // Fetch user listings
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://pawmart-server-nine.vercel.app/products?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setListings(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user?.email]);

  // Handle delete
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure?");
    if (!confirm) return;

    const res = await fetch(
      `https://pawmart-server-nine.vercel.app/products/${id}`,
      { method: "DELETE" }
    );
    const result = await res.json();

    if (result.deletedCount > 0) {
      toast.success("Deleted successfully!");
      setListings(listings.filter((item) => item._id !== id));
    }
  };

  // Handle update
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const updated = {
      name: form.name.value,
      category: form.category.value,
      price: parseFloat(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
    };

    const res = await fetch(
      `https://pawmart-server-nine.vercel.app/products/${editingItem._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      }
    );

    const result = await res.json();

    if (result.modifiedCount > 0) {
      toast.success("Listing updated successfully!");
      setListings((prev) =>
        prev.map((item) =>
          item._id === editingItem._id ? { ...item, ...updated } : item
        )
      );
      setEditingItem(null);
    }
  };

  if (loading) return <LoadingSkeleton count={6} />;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">🐾 My Listings</h2>

      <div className="overflow-x-auto">
        <table className="table w-full rounded-xl">
          <thead className="bg-purple-100">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((item, index) => (
              <motion.tr
                key={item._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: "#e9d5ff" }}
              >
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.price === 0 ? "Free" : `$${item.price}`}</td>
                <td>{item.location}</td>
                <td className="space-x-2">
                  <button
                    onClick={() => setEditingItem(item)}
                    className="btn btn-sm bg-blue-500 text-white"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-sm bg-red-500 text-white"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <motion.div
            className="bg-white p-6 rounded-xl w-96 relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              Edit Listing
            </h3>
            <form onSubmit={handleUpdate} className="space-y-3">
              <input
                type="text"
                name="name"
                defaultValue={editingItem.name}
                placeholder="Name"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="category"
                defaultValue={editingItem.category}
                placeholder="Category"
                className="input input-bordered w-full"
              />
              <input
                type="number"
                name="price"
                defaultValue={editingItem.price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
              <input
                type="text"
                name="location"
                defaultValue={editingItem.location}
                placeholder="Location"
                className="input input-bordered w-full"
              />
              <textarea
                name="description"
                defaultValue={editingItem.description}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
              />
              <input
                type="text"
                name="image"
                defaultValue={editingItem.image}
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
              <div className="flex justify-between mt-4">
                <button type="submit" className="btn bg-green-500 text-white">
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="btn bg-gray-400 text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MyListings;
