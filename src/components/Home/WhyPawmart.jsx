import React from "react";

const WhyAdopt = () => {
  return (
    <section className="py-25 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 mb-25 transition duration-300">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 text-center md:text-left">
          
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6">
              🐾 Why Adopt from PawMart?
            </h2>
          </div>

          <div className="md:w-1/2">
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              Every pet deserves a loving home. By adopting, you save lives,
              reduce overpopulation in shelters, and experience unconditional
              love. PawMart connects you with rescued pets looking for forever
              homes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Adopting is not just giving a pet a home — it’s giving them a
              chance to be happy, healthy, and loved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
