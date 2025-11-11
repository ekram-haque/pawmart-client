import React from "react";

const OurBlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "10 Tips to Keep Your Pet Healthy and Happy 🐾",
      author: "Dr. Nafisa Rahman",
      date: "November 10, 2025",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1000&q=80",
      excerpt:
        "Learn the best ways to take care of your furry friend — from proper diet to daily exercise and love.",
    },
    {
      id: 2,
      title: "Best Food for Dogs: What You Should Know 🍖",
      author: "Ekramul Haque",
      date: "November 5, 2025",
      image:
        "https://images.unsplash.com/photo-1558944351-dae1b9e1d1b9?auto=format&fit=crop&w=1000&q=80",
      excerpt:
        "Choosing the right dog food is crucial. Let’s explore the nutrients, brands, and portion sizes your pet needs.",
    },
    {
      id: 3,
      title: "How to Train Your Cat to Behave Like a Pro 🐱",
      author: "Anika Chowdhury",
      date: "November 2, 2025",
      image:
        "https://images.unsplash.com/photo-1602067340370-28d0a4d1d4dc?auto=format&fit=crop&w=1000&q=80",
      excerpt:
        "Cats are independent, but with patience and consistency, you can train them to follow routines easily.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-10 px-5">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-3">
          📰 Our Blog
        </h1>
        <p className="text-gray-600 text-lg">
          Discover the latest tips, guides, and heartwarming stories from the
          world of pets and animal care.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 hover:text-purple-700 transition">
                {blog.title}
              </h2>
              <p className="text-gray-500 text-sm mb-3">
                By <span className="font-medium text-gray-700">{blog.author}</span> • {blog.date}
              </p>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <button className="text-white bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlogPage;
