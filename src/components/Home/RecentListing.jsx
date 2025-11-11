import React from "react";

const RecentListings = () => {
  const listings = [
    {
      id: 1,
      name: "Golden Retriever Puppy",
      category: "Pets (Adoption)",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      price: "Free for Adoption",
      location: "Dhaka, Bangladesh",
    },
    {
      id: 2,
      name: "Cat Food Pack",
      category: "Pet Food",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      price: "$15",
      location: "Chattogram, Bangladesh",
    },
    {
      id: 3,
      name: "Dog Collar with Bell",
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      price: "$8",
      location: "Khulna, Bangladesh",
    },
    {
      id: 4,
      name: "Pet Vitamin Supplements",
      category: "Pet Care Products",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      price: "$20",
      location: "Rajshahi, Bangladesh",
    },
    {
      id: 5,
      name: "Siamese Cat",
      category: "Pets (Adoption)",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      price: "Free for Adoption",
      location: "Sylhet, Bangladesh",
    },
    {
      id: 6,
      name: "Pet Shampoo",
      category: "Pet Care Products",
      image:
        "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      price: "$10",
      location: "Barishal, Bangladesh",
    },
  ];

  return (
    <section className="py-12 mb-25">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        🐾 Recent Listings
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-12">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300"
          >
            <img
              src={listing.image}
              alt={listing.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
              {listing.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              Category: {listing.category}
            </p>
            <p className="text-lg font-bold text-purple-700 dark:text-pink-400 mb-1">
              {listing.price}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              📍 {listing.location}
            </p>

            <button className="px-5 py-2 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-800 dark:to-pink-700 rounded-md font-semibold hover:opacity-70 transition duration-300 shadow-md">
              See Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentListings;
