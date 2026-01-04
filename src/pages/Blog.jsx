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
    <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-12 px-5">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 dark:text-purple-400 mb-4">
          Our Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Discover the latest tips, guides, and heartwarming stories from the
          world of pets and animal care.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="
              bg-white dark:bg-gray-900
              rounded-2xl overflow-hidden
              shadow-md hover:shadow-xl
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6 flex flex-col gap-3">
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white leading-snug hover:text-purple-600 transition-colors">
                {blog.title}
              </h2>

              {/* Meta */}
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By{" "}
                <span className="font-medium text-gray-700 dark:text-gray-300">
                  {blog.author}
                </span>{" "}
                • {blog.date}
              </p>

              {/* Excerpt */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {blog.excerpt}
              </p>

              {/* CTA */}
              <button
                className="
                  mt-4 w-fit
                  text-sm font-medium text-white
                  bg-gradient-to-r from-purple-600 to-pink-600
                  px-5 py-2 rounded-md
                  hover:from-purple-700 hover:to-pink-700
                  transition
                "
              >
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OurBlogPage;
