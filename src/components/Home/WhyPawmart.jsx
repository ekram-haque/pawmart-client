import React from "react";

const WhyAdopt = () => {
  return (
    <section className="py-16 bg-linear-to-r from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="flex flex-row-reverse items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold text-purple-800 mb-6">
              🐾 Why Adopt from PawMart?
            </h2>
          </div>
          <div>
            <p className="text-gray-700 text-lg mb-6">
              Every pet deserves a loving home. By adopting, you save lives,
              reduce overpopulation in shelters, and experience unconditional
              love. PawMart connects you with rescued pets looking for forever
              homes.
            </p>
            <p className="text-gray-700 text-lg">
              Adopting is not just giving a pet a home, it’s giving them a
              chance to be happy, healthy, and loved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
