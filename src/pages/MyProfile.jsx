import React, { useContext, useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

export default function MyProfile() {
  const { user, setUser } = useContext(AuthContext); // make sure setUser exists in your AuthContext
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user.displayName || "",
    bio: user.bio || "",
    location: user.location || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const res = await fetch(
        `https://pawmart-server-gamma.vercel.app/user/update-profile/${user.email}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const updatedUser = await res.json();
      setUser(updatedUser);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4 flex flex-col items-center transition-colors duration-300">
      {/* Profile Card (your original JSX) */}
      <div className="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl shadow-lg dark:shadow-gray-900 p-6 flex flex-col items-center transition-colors duration-300">
        <img
          src={user.photoURL || "https://i.ibb.co/zVjKcP2/profile.jpg"}
          alt={user.displayName || "User"}
          className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          {user.displayName || "Anonymous User"}
        </h1>
        <p className="text-gray-500 dark:text-gray-300 text-center mt-2">
          {user.bio || "No bio available."}
        </p>
        <button
          onClick={() => setIsEditing(true)}
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition"
        >
          Edit Profile
        </button>

        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">
                {user.email}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Location
              </p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">
                {user.location || "Not set"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Joined</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">
                {user.joinDate || "Unknown"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaUser className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Role</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">
                {user.role || "User"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
            <input
              type="text"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              placeholder="Name"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Bio"
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full mb-3 p-2 border rounded"
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
