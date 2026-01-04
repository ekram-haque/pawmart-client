import React, { useState } from "react";

const heroes = [
  {
    id: 1,
    name: "Sara Khan",
    role: "Adopter & Volunteer",
    image:
      "https://plus.unsplash.com/premium_photo-1679440415182-c362deb2fd40?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Sara has adopted 3 pets and volunteers at local shelters, spreading love and awareness for rescued animals.",
  },
  {
    id: 2,
    name: "Rafiq Ahmed",
    role: "Pet Caregiver",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Rafiq provides day-to-day care for rescued pets and educates families about proper pet nutrition and health.",
  },
  {
    id: 3,
    name: "Nabila Hossain",
    role: "Adopter",
    image:
      "https://images.unsplash.com/photo-1560087637-bf797bc7796a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Nabila is a passionate adopter who believes every pet deserves a loving home and actively participates in adoption drives.",
  },
];

const PetHeroes = () => {
  const [current, setCurrent] = useState(0);
  const length = heroes.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <section className="py-20 mb-20 w-11/12 mx-auto  bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg dark:from-gray-900 dark:to-gray-800 transition duration-300">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-purple-800 dark:text-purple-300 mb-6">
          🐕 Meet Our Pet Heroes
        </h2>

        <div className="relative">
          {/* Slides */}
          {heroes.map((hero, index) => (
            <div
              key={hero.id}
              className={`flex flex-col md:flex-row items-center justify-center gap-8 transition-all duration-700 ${
                index === current ? "opacity-100" : "opacity-0 absolute"
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 w-full">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-80 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text */}
              <div className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg text-left">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {hero.name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium mb-4">
                  {hero.role}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {hero.description}
                </p>
              </div>
            </div>
          ))}

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 p-3 rounded-full shadow-lg"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-white/50 dark:bg-gray-700/50 hover:bg-white/70 dark:hover:bg-gray-700/70 p-3 rounded-full shadow-lg"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetHeroes;
