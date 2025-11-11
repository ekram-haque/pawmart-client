import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Adopting a Pet Successfully",
    excerpt:
      "Learn how to prepare your home and heart for a new furry friend.",
    image:
      "https://images.unsplash.com/photo-1601758125946-6ec2ef642b4c?auto=format&fit=crop&w=800&q=80",
    date: "Nov 10, 2025",
  },
  {
    id: 2,
    title: "Best Foods for Your Dog in 2025",
    excerpt:
      "Healthy and nutritious options to keep your dog happy and active.",
    image:
      "https://images.unsplash.com/photo-1618592001209-69c3bbfbbf04?auto=format&fit=crop&w=800&q=80",
    date: "Nov 5, 2025",
  },
  {
    id: 3,
    title: "Why Adoption is Better Than Buying",
    excerpt:
      "Understand the benefits of adopting rescued pets instead of buying.",
    image:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
    date: "Oct 28, 2025",
  },
];

const OurBlog = () => {
  return (
    <section className="py-25 bg-linear-to-r from-purple-50 to-pink-50 mb-25">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-purple-800 mb-12">
          📰 Our Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white  rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 text-sm">{post.excerpt}</p>
                <button className="mt-4 bg-linear-to-r from-purple-700 to-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
