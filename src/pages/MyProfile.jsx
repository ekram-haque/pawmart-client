import React, { useContext } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

export default function MyProfile() {

  const { user } = useContext(AuthContext);

//   useEffect(() => {
//   fetch(`https://your-server.com/user/${user.email}`)
//     .then(res => res.json())
//     .then(data => user(data));
// }, [user.email]);
//   if (!user) return <p className="text-center mt-10">Loading...</p>;



  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-10 px-4 flex flex-col items-center transition-colors duration-300">
      {/* Profile Card */}
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
    </div>
  );
}
