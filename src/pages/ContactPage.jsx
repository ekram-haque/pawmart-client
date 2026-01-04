import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">
        Get in Touch
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ===== Contact Info Panel ===== */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 dark:from-gray-900 dark:to-gray-800 text-white p-10 rounded-3xl shadow-lg flex flex-col justify-between space-y-6">
          <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
          <p className="text-white/90">
            Have questions or want to connect? Reach out to us using the form or
            the info below.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiMail className="text-2xl" />
              <span>support@pawmart.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="text-2xl" />
              <span>+880 123 456 789</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin className="text-2xl" />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          <p className="text-white/80 text-sm mt-8">
            We reply within 24 hours. Your privacy is important to us.
          </p>
        </div>

        {/* ===== Contact Form ===== */}
        <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full p-4 mt-2 border rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full p-4 mt-2 border rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Type your message..."
                className="w-full p-4 mt-2 border rounded-xl bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
