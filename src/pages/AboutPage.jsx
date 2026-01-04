import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6 text-center">
          About Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          PawMart is your go-to platform for adopting and buying pets and pet
          supplies. We believe every pet deserves a loving home and every pet
          owner deserves quality products and services.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 dark:text-gray-300">
            To connect pets with loving owners and provide quality pet products.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Make pet adoption easy and accessible for everyone.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Our Values</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Compassion, trust, transparency, and care for animals.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
