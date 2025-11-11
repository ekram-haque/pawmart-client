import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";

export default function MyProfile() {
  const user = {
    name: "Ekramul Haque",
    email: "ekramul@example.com",
    location: "Cox’s Bazar, Bangladesh",
    joinDate: "January 2024",
    bio: "Android & Web Developer | Passionate about tech, design, and learning new things.",
    profileImage: "https://i.ibb.co/zVjKcP2/profile.jpg",
    role: "Developer",
    stats: { posts: 12, followers: 320, following: 180 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4 flex flex-col items-center transition-colors duration-300">
      {/* Profile Card */}
      <div className="bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl shadow-lg dark:shadow-gray-900 p-6 flex flex-col items-center transition-colors duration-300">
        <img
          src={user.profileImage}
          alt={user.name}
          className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{user.name}</h1>
        <p className="text-gray-500 dark:text-gray-300 text-center mt-2">{user.bio}</p>
        <button className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 transition">
          Edit Profile
        </button>

        {/* Info Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Email</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Location</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaCalendarAlt className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Joined</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user.joinDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaUser className="text-indigo-600" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Role</p>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{user.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-3xl mx-auto text-center">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-900 py-6 transition-colors duration-300">
          <p className="text-2xl font-semibold text-indigo-600">{user.stats.posts}</p>
          <p className="text-gray-500 dark:text-gray-400">Total Orders</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md dark:shadow-gray-900 py-6 transition-colors duration-300">
          <p className="text-2xl font-semibold text-indigo-600">{user.stats.followers}</p>
          <p className="text-gray-500 dark:text-gray-400">Total Listing</p>
        </div>
      </div>
    </div>
  );
}
